import type FeatureFlagName from './FeatureFlagName';

type FeatureFlagValues = {
  [featureFlagName in FeatureFlagName]: boolean;
}

export {
  type FeatureFlagValues as default
};
