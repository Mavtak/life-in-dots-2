import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import type GraphEntry from './GraphEntry';
import GraphSegment, { sizePx as graphSegmentSizePx } from './GraphSegment';
import type Selection from './Selection';

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
  data: GraphEntry[];
};

const Graph = ({data}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [selection, setSelection] = useState<Selection | null>(null);
  const [isSelecting, setIsSelecting] = useState<boolean>(false);

  const handleClearSelection = useCallback(() => {
    setSelection(null);
  }, []);

  const handleSelectionEnd = useCallback(() => {
    setIsSelecting(false);
  }, []);

  useEffect(() => {
    document.addEventListener('pointerup', handleSelectionEnd);

    return () => document.removeEventListener('pointerup', handleSelectionEnd);
  }, [handleSelectionEnd]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {

      if (!containerRef.current) {
        return null;
      }

      if (containerRef.current.contains(event.target as HTMLElement)){
        return;
      }

      handleClearSelection();
    };

    document.addEventListener('pointerdown', handlePointerDown);

    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [handleClearSelection]);

  const renderGraphSegment = (entry: GraphEntry) => {
    const isSelected = !!selection
          && entry.weekNumber >= Math.min(selection.startWeek, selection.endWeek)
          && entry.weekNumber <= Math.max(selection.startWeek, selection.endWeek);

    const handleSelectionContinue = () => {
      if (!isSelecting || !selection) {
        return;
      }

      setSelection({
        ...selection,
        endWeek: entry.weekNumber,
      });
    };

    const handleSelectionStart = () => {
      setIsSelecting(true);
      setSelection({
        endWeek: entry.weekNumber,
        startWeek: entry.weekNumber,
      });
    };

    return (
      <GraphSegment
        data={entry}
        isSelected={isSelected}
        onSelectionContinue={handleSelectionContinue}
        onSelectionStart={handleSelectionStart}
        key={entry.weekNumber}
      />
    );
  };

  return (
    <Container ref={containerRef}>
      {
        data.map(renderGraphSegment)
      }
    </Container>
  );
};

export default Graph;
