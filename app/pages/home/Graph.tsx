import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import type { GraphEntry } from './getPosterData';
import GraphSegment, { sizePx as graphSegmentSizePx } from './GraphSegment';

const Container = styled.div`
  width: round(down, 100%, ${graphSegmentSizePx}px);
  display: grid;
  grid-template-columns: repeat(auto-fill,  minmax(${graphSegmentSizePx}px, 1fr));
  
  background-color: white;
  padding: 12px;
  border-radius: 24px;
`;

type Props = {
  data: GraphEntry[];
};

const Graph = ({data}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [selection, setSelection] = useState<{
    endWeek: number,
    startWeek: number,
  } | null>(null);
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
    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current) {
        return null;
      }

      if (containerRef.current.contains(event.target as HTMLElement)){
        return;
      }

      handleClearSelection();
    };

    document.addEventListener('mousedown', handlePointerDown);

    return () => document.removeEventListener('mousedown', handlePointerDown);
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
