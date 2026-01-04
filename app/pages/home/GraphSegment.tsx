import { type PointerEventHandler, useCallback, useRef } from 'react';
import styled from 'styled-components';
import type GraphEntry from '~/data/GraphEntry';
import type ZoomLevel from './ZoomLevel';

export const getSizePx = (zoomLevel: ZoomLevel): number => {
  switch(zoomLevel) {
  case 'extra-small':
    return 6;

  case 'small':
    return 8;

  case 'regular':
    return 12;

  case 'large':
    return 16;

  case 'extra large':
    return 22;
  }
};

const Container = styled.div<{
  $value: GraphEntry,
  $isSelected: boolean,
  $isSelecting: boolean,
  $zoomLevel: ZoomLevel,
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({$isSelecting}) => $isSelecting && `
    touch-action: none;
  `}
  user-select: none;

  --size: ${({$zoomLevel}) => getSizePx($zoomLevel)}px;

  width: var(--size);
  height: var(--size);
  font-size: var(--size);

  ${({$value}) => $value.isBirthWeek && `
    font-weight: 700;
  `}

  ${({$value}) => !$value.isBirthWeek && `
    font-size: calc(var(--size) * 2);
  `}

  ${({$value}) => $value.hasPassed && !$value.isBirthWeek && `
    color: #aaaaaa;
    font-size: calc(var(--size) * 1.5);
  `}
  
  ${({$value}) => $value.hasPassed && $value.isBirthWeek && `
    color: #555555;
  `}

  ${({$value}) =>  !$value.hasPassed  && !$value.isBirthWeek && `
    color: #444444;
  `}

  ${({$value}) =>  !$value.hasPassed  && $value.isBirthWeek && `
    color: #000000;
  `}

  ${({$isSelected}) => $isSelected && `
    background-color: orangered;
  `}
`;

type Props = {
  isSelected: boolean,
  isSelecting: boolean,
  onSelectionContinue: () => void,
  onSelectionStart: () => void,
  value: GraphEntry,
  zoomLevel: ZoomLevel,
};

const GraphSegment = ({
  isSelected,
  isSelecting,
  onSelectionContinue,
  onSelectionStart,
  value,
  zoomLevel,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerDown: PointerEventHandler<HTMLDivElement> = useCallback((event) => {
    containerRef?.current?.releasePointerCapture(event.pointerId);

    onSelectionStart();
  }, [onSelectionStart]);

  const renderValue = () => {
    if (value.isBirthWeek) {
      return String(value.age);
    }

    if (value.hasPassed) {
      return '×';
    }

    return '∙';
  };

  return (
    <Container
      $isSelected={isSelected}
      $isSelecting={isSelecting}
      $zoomLevel={zoomLevel}
      $value={value}
      onPointerMove={onSelectionContinue}
      onPointerDown={handlePointerDown}
      ref={containerRef}
    >
      {renderValue()}
    </Container>
  );
};

export default GraphSegment;
