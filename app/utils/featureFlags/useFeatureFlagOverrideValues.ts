import { useCallback } from 'react';
import useStoredState from '../useStoredState';
import type FeatureFlagName from './FeatureFlagName';
import type FeatureFlagValues from './FeatureFlagValues';

const getDefaultValue = () => {
  return {};
};

const localStorageKey = 'feature-flags';

const useFeatureFlagOverrideValues = () => {
  const [values, setValues, reset] = useStoredState<Partial<FeatureFlagValues>>({
    getDefaultValue,
    key: localStorageKey,
  });

  const setValue = useCallback((featureFlagName: FeatureFlagName, newValue: boolean | null) => {
    if (newValue === null) {
      const newValues = {
        ...values,
      };

      delete newValues[featureFlagName];

      setValues(newValues);

      return;
    }

    const newValues = {
      ...values,
      [featureFlagName]: newValue,
    };

    setValues(newValues);
  }, [setValues, values]);

  const result: [
    typeof values,
    typeof setValue,
    typeof reset,
  ] = [values, setValue, reset];

  return result;
};

export default useFeatureFlagOverrideValues;
