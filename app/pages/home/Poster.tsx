import styled from 'styled-components';
import type PosterData from '~/data/PosterData';
import Graph from './Graph';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 100%;
  max-width: 1000px;

  background-color: #4d007f;
  color: white;
  padding: 8px;
  padding-top: 16px;
  border-radius: 32px;
`;

const Birthday = styled.div`
  font-size: 16px;
  line-height: 16px;

  margin-top: -8px
`;

const Name = styled.div`
  font-size: 40px;
  line-height: 40px;
`;

type Props = {
  isSelecting: boolean;
  onChangeIsSelecting: (newIsSelecting: boolean) => void;
  onUpdate: (newValue: PosterData) => void;
  value: PosterData;
};

const Poster = ({
  isSelecting,
  onChangeIsSelecting,
  onUpdate,
  value,
}: Props) => {
  return (
    <Container>
      <Name>{value.name}</Name>
      <Birthday>{value.birthday.format('dddd D MMMM YYYY')}</Birthday>
      <Graph
        isSelecting={isSelecting}
        onChangeIsSelecting={onChangeIsSelecting}
        onUpdate={onUpdate}
        value={value}
      />
    </Container>
  );
};

export default Poster;
