import styled from 'styled-components';
import Pill from '~/controls/Pill';
import type FeatureFlagConfiguration from '~/utils/featureFlags/featureFlagConfiguration';
import { featureFlagNames } from '~/utils/featureFlags/featureFlagConfiguration';
import useFeatureFlagConfiguration from '~/utils/featureFlags/useFeatureFlagConfiguration';
import useFeatureFlagOverrideValues from '~/utils/featureFlags/useFeatureFlagOverrideValues';

const Container = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 8px;
  
`;
const FeatureFlagControls = () => {
  const featureFlagConfiguration = useFeatureFlagConfiguration();
  const [, setFeatureFlagOverrideValue] = useFeatureFlagOverrideValues();

  const renderEntries = () => {
    if ((featureFlagNames as readonly any[]).length === 0) {
      return 'there are no feature flags';
    }

    const renderEntry = (entry: FeatureFlagConfiguration) => {
      const handlePress = () => {
        if (entry.overriddenValue === entry.defaultValue) {
          setFeatureFlagOverrideValue(entry.name, null);
        } else {
          setFeatureFlagOverrideValue(entry.name, !entry.value);
        }
      };

      const renderLabel = () => {
        return [
          `${entry.name}:`,
          entry.value ? 'on' : 'off',
          entry.overriddenValue !== null && '📌'
        ]
          .filter(x => !!x)
          .join(' ');
      };

      return (
        <Pill
          label={renderLabel()}
          onPress={handlePress}
        />
      );
    };

    return (
      <>
        {
          featureFlagNames.map((featureFlagName) => {
            return renderEntry(featureFlagConfiguration[featureFlagName]);
          })
        }
      </>
    );
  };

  return (
    <Container>
      {renderEntries()}
    </Container>
  );
};

export default FeatureFlagControls;
