import type FeatureFlagName from './FeatureFlagName';
import useFeatureFlagConfiguration from './useFeatureFlagConfiguration';

const useFeatureFlag = (featureFlagName: FeatureFlagName) => {
  const configuration = useFeatureFlagConfiguration();
  const featureFlagConfiguration = configuration[featureFlagName];
  const result = featureFlagConfiguration.value;

  return result;
};

export default useFeatureFlag;
