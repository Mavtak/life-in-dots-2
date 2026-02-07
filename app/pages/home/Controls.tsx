import Button from '~/controls/Button';
import ThreePartButton from '~/controls/ThreePartButton';
import type PosterData from '~/data/PosterData';
import type ZoomLevel from './ZoomLevel';
import zoomLevels, { defaultZoomLevel } from './zoomLevels';
import StickyFrameButtonGroup from '~/controls/StickyFrameButtonGroup';

type Props = {
  isSelecting: boolean;
  onChangeIsSelecting: (newIsSelecting: boolean) => void;
  onChangeZoomLevel: (newZoomLevel: ZoomLevel) => void;
  onUpdatePosterData: (newPosterData: PosterData) => void;
  posterData: PosterData;
  zoomLevel: ZoomLevel,
}

const Controls = ({
  isSelecting,
  onChangeIsSelecting,
  onChangeZoomLevel,
  onUpdatePosterData,
  posterData,
  zoomLevel
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

  const renderZoomButton = () => {
    const zoomLevelIndex = zoomLevels.indexOf(zoomLevel);

    return (
      <ThreePartButton
        left={{
          isDisabled: zoomLevelIndex === 0,
          label: '-',
          onPress: () => {
            const newZoomLevel = zoomLevels[zoomLevelIndex - 1];

            onChangeZoomLevel(newZoomLevel);
          },
        }}
        middle={{
          label: 'Zoom',
          onPress: () => {
            onChangeZoomLevel(defaultZoomLevel);
          },
        }}
        right={{
          isDisabled: zoomLevelIndex === zoomLevels.length - 1,
          label: '+',
          onPress: () => {
            const newZoomLevel = zoomLevels[zoomLevelIndex + 1];

            onChangeZoomLevel(newZoomLevel);
          },
        }}
      />
    );
  };

  return (
    <StickyFrameButtonGroup target="content-bottom">
      {renderZoomButton()}
      {renderMakeSelectionButton()}
      {renderClearSelectionButton()}
    </StickyFrameButtonGroup>
  );

};

export default Controls;
