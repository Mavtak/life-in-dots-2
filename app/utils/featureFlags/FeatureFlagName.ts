import type { featureFlagNames } from './featureFlagConfiguration';

type FeatureFlagName = typeof featureFlagNames[number];

export {
  type FeatureFlagName as default
};
