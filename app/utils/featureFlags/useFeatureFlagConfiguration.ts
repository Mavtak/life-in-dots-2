import { useMemo } from 'react';
import type FeatureFlagConfiguration from './featureFlagConfiguration';
import { featureFlagDefaultValues, featureFlagNames } from './featureFlagConfiguration';
import type FeatureFlagName from './FeatureFlagName';
import useFeatureFlagOverrideValues from './useFeatureFlagOverrideValues';

const useFeatureFlagConfiguration = () => {
  const defaultValues = featureFlagDefaultValues;
  const [overrideValues] = useFeatureFlagOverrideValues();

  const result = useMemo(() => {
    const entries = featureFlagNames.map((featureFlagName) => {
      const defaultValue = defaultValues[featureFlagName];
      const overriddenValue = overrideValues[featureFlagName] === undefined
        ? null
        : overrideValues[featureFlagName];
      const value = overriddenValue === null
        ? defaultValue
        : overriddenValue;

      const result: FeatureFlagConfiguration = {
        defaultValue,
        name: featureFlagName,
        overriddenValue,
        value,
      };

      return result;
    });

    const result: {
      [featureFlagName in FeatureFlagName]: FeatureFlagConfiguration;
    } = entries.reduce((previousValue, currentValue) => {
      const result = {
        ...previousValue,
        [currentValue.name]: currentValue,
      };

      return result;
    }, {} as typeof result);

    return result;
  }, [defaultValues, overrideValues]);

  return result;
};

export default useFeatureFlagConfiguration;
