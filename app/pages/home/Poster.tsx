import styled from "styled-components";
import type { PosterData } from "./getPosterData";
import Graph from "./Graph";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  background-color: #4d007f;
  color: white;
  padding: 8px;
  border-radius: 8px;
  margin: 16px;
`;

const Birthday = styled.div`
  font-size: 16px;
  line-height: 16px;
`;

const Name = styled.div`
  font-size: 40px;
  line-height: 40px;
`;

type Props = {
  data: PosterData;
};

const Poster = ({data}: Props) => {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Birthday>{data.birthday.format('dddd D MMMM YYYY')}</Birthday>
      <Graph data={data.graphData} />
    </Container>
  );
};

export default Poster;
