import { useContext, useRef } from 'react';
import useResizeObserver from '../useResizeObserver';
import type Direction from './Direction';
import Container from './StickyFrame.Container';
import DebugItem from './StickyFrame.DebugItem';
import ItemContainer from './StickyFrame.ItemContainer';
import stickyFrameDimensionsContext, {
  type Dimensions,
} from './stickyFrameDimensionsContext';
import stickyFrameItemsContext from './stickyFrameItemsContext';

type Props = {
  direction: Direction;
  isShowingDebug?: boolean,
  name: string;
};

const StickyFrame = ({
  direction,
  name,
  isShowingDebug = false,
  ...passThroughProps
}: Props) => {
  const { dimensions, onChangeDimensions } = useContext(
    stickyFrameDimensionsContext,
  )!;
  const { items } = useContext(stickyFrameItemsContext)!;
  const containerRef = useRef<HTMLDivElement>(null);

  const handleUpdateDimensions = (newDimensions: Dimensions) => {
    const existingDimensions = dimensions[name];
    if (
      existingDimensions &&
      newDimensions.heightPx === existingDimensions.heightPx &&
      newDimensions.widthPx === existingDimensions.widthPx
    ) {
      return;
    }

    onChangeDimensions({
      target: name,
      value: newDimensions,
    });
  };

  useResizeObserver(containerRef, (entry) => {
    const dimentions: Dimensions = {
      heightPx: entry.contentRect.height,
      widthPx: entry.contentRect.width,
    };

    handleUpdateDimensions(dimentions);
  });

  return (
    <Container $direction={direction} ref={containerRef} {...passThroughProps}>
      {isShowingDebug && (
        <ItemContainer $direction={direction}>
          <DebugItem $direction={direction}>{name}</DebugItem>
        </ItemContainer>
      )}
      {items
        .filter((x) => x.target === name)
        .sort((a, b) => {
          const weightA = a.weight || 0;
          const weightB = b.weight || 0;

          if (weightA < weightB) {
            return 1;
          }

          if (weightA > weightB) {
            return -1;
          }

          return 0;
        })
        .map(({ key, node }) => (
          <ItemContainer $direction={direction} key={key}>
            {node}
          </ItemContainer>
        ))}
    </Container>
  );
};

export default StickyFrame;
