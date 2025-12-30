import { useCallback, useRef, type PointerEventHandler } from 'react';
import styled from 'styled-components';
import type GraphEntry from './GraphEntry';

export const sizePx = 12;

const Container = styled.div<{
  $value: GraphEntry,
  $isSelected: boolean,
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  touch-action: none;
  user-select: none;

  --size: ${sizePx}px;

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
  onSelectionContinue: () => void,
  onSelectionStart: () => void,
  value: GraphEntry,
};

const GraphSegment = ({
  isSelected,
  onSelectionContinue,
  onSelectionStart,
  value,
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
      return "×";
    }

    return "∙";
  };

  return (
    <Container
      $isSelected={isSelected}
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