import type FeatureFlagName from './FeatureFlagName';
import type FeatureFlagValues from './FeatureFlagValues';

export const featureFlagNames = [
] as const;

export const featureFlagDefaultValues: FeatureFlagValues = {
};

type FeatureFlagConfiguration = {
    defaultValue: boolean;
    name: FeatureFlagName;
    overriddenValue: boolean | null;
    value: boolean;
  };

export {
  type FeatureFlagConfiguration as default
};
