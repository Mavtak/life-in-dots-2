import type PosterData from '~/data/PosterData';
import Button from './Button';
import StickyFrameButtonGroup from './StickyFrameButtonGroup';

type Props = {
  isSelecting: boolean;
  onChangeIsSelecting: (newIsSelecting: boolean) => void;
  onUpdatePosterData: (newPosterData: PosterData) => void;
  posterData: PosterData;
}

const Controls = ({
  isSelecting,
  onChangeIsSelecting,
  onUpdatePosterData,
  posterData,
}: Props) => {
  const renderMakeSelectionButton = () => {
    const handlePress = () => {
      onChangeIsSelecting(true);
      onUpdatePosterData({
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
      onChangeIsSelecting(false);
      onUpdatePosterData({
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

export default Controls;
