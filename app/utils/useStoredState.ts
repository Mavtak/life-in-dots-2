import { useCallback, useEffect, useMemo, useState } from 'react';

type Input<T> = {
  getDefaultValue: () => T;
  convertFromDeserializedValue?: (parsedValue: object) => T;
  convertToSerializableValue?: (value: T) => object;
  key: string;
  storageAreaName?: 'localStorage' | 'sessionStorage';
};

type Output<T> = [T, (newValue: T) => void, () => void];

const useStoredState = <T>({
  getDefaultValue,
  convertFromDeserializedValue,
  convertToSerializableValue,
  key,
  storageAreaName = 'localStorage'
}: Input<T>): Output<T> => {
  const storageArea = window[storageAreaName];

  const getValue = useCallback(
    (overriddenStringValue?: string | null) => {
      const stringValue =
        overriddenStringValue !== undefined
          ? overriddenStringValue
          : storageArea.getItem(key);

      if (!stringValue) {
        return getDefaultValue();
      }

      const parsedValue = JSON.parse(stringValue);
      const processedValue = convertFromDeserializedValue
        ? convertFromDeserializedValue(parsedValue)
        : parsedValue;

      return processedValue;
    },
    [convertFromDeserializedValue, getDefaultValue, key, storageArea],
  );

  const [stateValue, setStateValue] = useState<T>(getValue);

  useEffect(() => {
    const handleStorageEvent = (event: StorageEvent) => {
      if (event.storageArea !== storageArea) {
        return;
      }

      if (event.key !== key) {
        return;
      }

      const newValue = getValue(event.newValue);

      setStateValue(newValue);
    };

    window.addEventListener('storage', handleStorageEvent);

    return () => window.removeEventListener('storage', handleStorageEvent);
  }, [getValue, key, storageArea]);

  const result = useMemo<Output<T>>(() => {
    const setValue = (newValue: T | ((oldValue: T) => T)) => {
      setStateValue((oldStateValue) => {
        if (typeof newValue === 'function') {
          newValue = (newValue as (oldValue: T) => T)(oldStateValue);
        }

        const newSerializableValue = convertToSerializableValue
          ? convertToSerializableValue(newValue)
          : newValue;
        const newStringValue = JSON.stringify(newSerializableValue);

        storageArea.setItem(key, newStringValue);

        window.dispatchEvent(
          new StorageEvent('storage', {
            key,
            newValue: newStringValue,
            storageArea: storageArea,
            url: window.location.toString(),
          }),
        );

        return newValue;
      });
    };

    const resetValue = () => {
      storageArea.removeItem(key);

      const newValue = getDefaultValue();
      const newSerializableValue = convertToSerializableValue
        ? convertToSerializableValue(newValue)
        : newValue;
      const newStringValue = JSON.stringify(newSerializableValue);

      window.dispatchEvent(
        new StorageEvent('storage', {
          key,
          newValue: newStringValue,
          storageArea,
          url: window.location.toString(),
        }),
      );

      setStateValue(newValue);
    };

    return [stateValue, setValue, resetValue];
  }, [convertToSerializableValue, getDefaultValue, key, stateValue, storageArea]);

  return result;
};

export const resetValue = (key: string, storageAreaName: 'localStorage' | 'sessionStorage' = 'localStorage') => {
  const storageArea = window[storageAreaName];

  storageArea.removeItem(key);

  window.dispatchEvent(
    new StorageEvent('storage', {
      key,
      newValue: null,
      storageArea,
      url: window.location.toString(),
    }),
  );
};

export default useStoredState;
