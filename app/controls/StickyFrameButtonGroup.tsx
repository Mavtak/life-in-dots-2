import type { ReactNode } from 'react';
import styled from 'styled-components';
import StickyFrameContent from '~/utils/stickyFrames/StickyFrameContent';
import ButtonGroup from './ButtonGroup';

const Container = styled(ButtonGroup)`
  background-color: white;
  padding: 20px;
  border-top: 1px solid black;

  width: 100%;
  overflow-y: auto;
`;

type Props = {
  children: ReactNode;
  target: string;
}

const StickyFrameButtonGroup = ({
  children,
  target,
}: Props) => {
  return (
    <StickyFrameContent target={target}>
      <Container>
        <ButtonGroup>
          {children}
        </ButtonGroup>
      </Container>
    </StickyFrameContent>
  );
};

export default StickyFrameButtonGroup;
