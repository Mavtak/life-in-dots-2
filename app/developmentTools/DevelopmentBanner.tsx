import styled from 'styled-components';
import LinkButton from '~/controls/LinkButton';
import FeatureFlagControls from './FeatureFlagControls';
import useDevelopmentTools from './useDevelopmentTools';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  background-color: #4d007f;
  padding: 8px;
  color: white;
  border-bottom: 1px solid black;

  :first-child {
    flex-grow: 1;
  }
`;

const DevelopmentBanner = () => {
  const developmentTools = useDevelopmentTools();

  const renderCloseButton = () => {
    const handlePress = () => {
      developmentTools.banner.setIsOpen(false);
    };

    return (
      <LinkButton
        label="close"
        onPress={handlePress}
      />
    );
  };

  return (
    <Container>
      <div>
        <FeatureFlagControls />
      </div>
      {renderCloseButton()}
    </Container>
  );
};

export default DevelopmentBanner;
