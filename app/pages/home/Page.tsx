import { useState } from 'react';
import styled from 'styled-components';
import usePosterData from '~/data/usePosterData';
import Button from './Button';
import Poster from './Poster';
import StickyFrameButtonGroup from './StickyFrameButtonGroup';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Page = () => {
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [posterData, setPosterData] = usePosterData();

  const renderControls = () => {
    const renderMakeSelectionButton = () => {
      const handlePress = () => {
        setIsSelecting(true);
        setPosterData({
          ...posterData,
          selection: null,
        });
      };

      return (
        <Button
          isDisabled={isSelecting}
          label="Make Selection"
          onPress={handlePress}
        />
      );
    };

    const renderClearSelectionButton = () => {
      const handlePress = () => {
        setIsSelecting(false);
        setPosterData({
          ...posterData,
          selection: null,
        });
      };

      return (
        <Button
          isDisabled={isSelecting || !posterData.selection}
          label="Clear Selection"
          onPress={handlePress}
        />
      );
    };

    return (
      <StickyFrameButtonGroup target="content-bottom">
        {renderMakeSelectionButton()}
        {renderClearSelectionButton()}
      </StickyFrameButtonGroup>
    );

  };
  return (
    <Container>
      <Poster
        isSelecting={isSelecting}
        onChangeIsSelecting={setIsSelecting}
        onUpdate={setPosterData}
        value={posterData}
      />
      {renderControls()}
    </Container>
  );
};

export default Page;
