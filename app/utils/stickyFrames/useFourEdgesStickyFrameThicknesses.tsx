import { useMemo } from 'react';
import useStickyFrameDimensions from './useStickyFrameDimensions';

const useFourEdgesStickyFrameThicknesses = (name: string) => {
  const bottomPx = useStickyFrameDimensions(`${name}-bottom`).heightPx;
  const leftPx = useStickyFrameDimensions(`${name}-left`).widthPx;
  const rightPx = useStickyFrameDimensions(`${name}-right`).widthPx;
  const topPx = useStickyFrameDimensions(`${name}-top`).heightPx;

  const result = useMemo(() => {
    const result = {
      bottomPx,
      leftPx,
      rightPx,
      topPx,
    };

    return result;
  }, [
    bottomPx,
    leftPx,
    rightPx,
    topPx,
  ]);

  return result;
};

export default useFourEdgesStickyFrameThicknesses;
