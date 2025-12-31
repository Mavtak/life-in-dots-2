import { useState } from 'react';
import styled from 'styled-components';
import usePosterData from '~/data/usePosterData';
import Poster from './Poster';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Page = () => {
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [posterData, setPosterData] = usePosterData();

  return (
    <Container>
      <Poster
        isSelecting={isSelecting}
        onChangeIsSelecting={setIsSelecting}
        onUpdate={setPosterData}
        value={posterData}
      />
    </Container>
  );
};

export default Page;
