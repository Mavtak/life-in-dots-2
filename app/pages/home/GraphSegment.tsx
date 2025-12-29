import { useCallback, useRef, type PointerEventHandler } from 'react';
import styled from 'styled-components';
import type GraphEntry from './GraphEntry';

export const sizePx = 12;

const Container = styled.div<{
  data: GraphEntry,
  isSelected: boolean,
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

  ${({data}) => data.isBirthWeek && `
    font-weight: 700;
  `}

  ${({data}) => !data.isBirthWeek && `
    font-size: calc(var(--size) * 2);
  `}

  ${({data}) => data.hasPassed && !data.isBirthWeek && `
    color: #aaaaaa;
    font-size: calc(var(--size) * 1.5);
  `}
  
  ${({data}) => data.hasPassed && data.isBirthWeek && `
    color: #555555;
  `}

  ${({data}) =>  !data.hasPassed  && !data.isBirthWeek && `
    color: #444444;
  `}

  ${({data}) =>  !data.hasPassed  && data.isBirthWeek && `
    color: #000000;
  `}

  ${({isSelected}) => isSelected && `
    background-color: orangered;
  `}
`;

type Props = {
  data: GraphEntry,
  isSelected: boolean,
  onSelectionContinue: () => void,
  onSelectionStart: () => void,
};

const GraphSegment = ({
  data,
  isSelected,
  onSelectionContinue,
  onSelectionStart,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerDown: PointerEventHandler<HTMLDivElement> = useCallback((event) => {
    containerRef?.current?.releasePointerCapture(event.pointerId);

    onSelectionStart();
  }, [onSelectionStart]);

  const renderValue = () => {
    if (data.isBirthWeek) {
      return String(data.age);
    }

    if (data.hasPassed) {
      return "×";
    }

    return "∙";
  };

  return (
    <Container
      data={data}
      isSelected={isSelected}
      onPointerMove={onSelectionContinue}
      onPointerDown={handlePointerDown}
      ref={containerRef}
    >
      {renderValue()}
    </Container>
  );
};

export default GraphSegment;