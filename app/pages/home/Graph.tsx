import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import type GraphEntry from '~/data/GraphEntry';
import type PosterData from '~/data/PosterData';
import GraphSegment, { sizePx as graphSegmentSizePx } from './GraphSegment';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill,  minmax(${graphSegmentSizePx}px, 1fr));
  
  background-color: white;
  padding: 12px;

  --extra-side-padding: calc(
    100%
    - round(down, 100% - 12px*2, ${graphSegmentSizePx}px)
  );

  padding-left: calc(var(--extra-side-padding) / 2);
  padding-right: calc(var(--extra-side-padding) / 2);

  border-radius: 24px;
`;

type Props = {
  isSelecting: boolean;
  onChangeIsSelecting: (newIsSelecting: boolean) => void;
  onUpdate: (newValue: PosterData) => void;
  value: PosterData;
};

const Graph = ({
  isSelecting,
  onChangeIsSelecting,
  onUpdate,
  value,
}: Props) => {
  const handleSelectionEnd = useCallback(() => {
    onChangeIsSelecting(false);
  }, [onChangeIsSelecting]);

  useEffect(() => {
    document.addEventListener('pointerup', handleSelectionEnd);

    return () => document.removeEventListener('pointerup', handleSelectionEnd);
  }, [handleSelectionEnd]);

  const renderGraphSegment = (entry: GraphEntry) => {
    const selection = value.selection;
    const isSelected = !!selection
          && entry.weekNumber >= Math.min(selection.startWeek, selection.endWeek)
          && entry.weekNumber <= Math.max(selection.startWeek, selection.endWeek);

    const handleSelectionContinue = () => {
      if (!isSelecting || !selection) {
        return;
      }

      const newSelection = {
        ...selection,
        endWeek: entry.weekNumber,
      };

      onUpdate({
        ...value,
        selection: newSelection,
      });
    };

    const handleSelectionStart = () => {
      if (!isSelecting) {
        return;
      }

      const newSelection = {
        endWeek: entry.weekNumber,
        startWeek: entry.weekNumber,
      };

      onUpdate({
        ...value,
        selection: newSelection,
      });
    };

    return (
      <GraphSegment
        isSelected={isSelected}
        isSelecting={isSelecting}
        onSelectionContinue={handleSelectionContinue}
        onSelectionStart={handleSelectionStart}
        key={entry.weekNumber}
        value={entry}
      />
    );
  };

  return (
    <Container>
      {
        value.graphData.map(renderGraphSegment)
      }
    </Container>
  );
};

export default Graph;
