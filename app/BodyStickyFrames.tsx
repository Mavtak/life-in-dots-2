import { useEffect } from 'react';
import FourEdgesStickyFrames from './utils/stickyFrames/FourEdgesStickyFrames';
import useFourEdgesStickyFrameThicknesses from './utils/stickyFrames/useFourEdgesStickyFrameThicknesses';

const BodyStickyFrames = () => {
  const thicknesses = useFourEdgesStickyFrameThicknesses('content');

  useEffect(() => {
    const style = document.documentElement.style;

    style.paddingBottom = `${thicknesses.bottomPx}px`;
    style.paddingLeft = `${thicknesses.leftPx}px`;
    style.paddingRight = `${thicknesses.rightPx}px`;
    style.paddingTop = `${thicknesses.topPx}px`;
  }, [thicknesses]);

  return (
    <FourEdgesStickyFrames
      name="content"
    />
  );
};

export default BodyStickyFrames;
