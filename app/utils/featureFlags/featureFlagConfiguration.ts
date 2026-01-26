import type FeatureFlagName from './FeatureFlagName';
import type FeatureFlagValues from './FeatureFlagValues';

export const featureFlagNames = [
  'Sparkles',
] as const;

export const featureFlagDefaultValues: FeatureFlagValues = {
  'Sparkles': false,
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
