import styled from 'styled-components';
import StickyFrame from './StickyFrame';

const BottomStickyFrame = styled(StickyFrame)`
  grid-area: bottom;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr auto;

  grid-template-areas:
    'top    top    top'
    'left   center right'
    'bottom bottom  bottom';

  position: fixed;
  inset: 0;

  pointer-events: none;
`;

const LeftFrame = styled(StickyFrame)`
  grid-area: left;

  min-height: 0;
`;

const RightFrame = styled(StickyFrame)`
  grid-area: right;

  min-height: 0;
`;

const TopStickyFrame = styled(StickyFrame)`
  grid-area: top;
`;

type Props = {
  isShowingDebug?: boolean,
  name: string;
};

const FourEdgesStickyFrames = ({
  isShowingDebug,
  name,
  ...otherProps
}: Props) => {
  return (
    <Container {...otherProps}>
      <TopStickyFrame
        direction="top-to-bottom"
        isShowingDebug={isShowingDebug}
        name={`${name}-top`}
      />
      <LeftFrame
        direction="left-to-right"
        isShowingDebug={isShowingDebug}
        name={`${name}-left`}
      />
      <RightFrame
        direction="right-to-left"
        isShowingDebug={isShowingDebug}
        name={`${name}-right`}
      />
      <BottomStickyFrame
        direction="bottom-to-top"
        isShowingDebug={isShowingDebug}
        name={`${name}-bottom`}
      />
    </Container>
  );
};

export default FourEdgesStickyFrames;
