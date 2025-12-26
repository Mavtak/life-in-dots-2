import styled from 'styled-components';
import type { GraphEntry } from './getPosterData';
import GraphSegment from './GraphSegment';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  background-color: white;
  color: black;
  padding: 12px;
  border-radius: 24px;
`;

type Props = {
  data: GraphEntry[];
};

const Graph = ({data}: Props) => {
  return (
    <Container>
      {
        data.map((entry) => {
          return (
            <GraphSegment key={entry.weekNumber} data={entry} />
          );
        })
      }
    </Container>
  );
};

export default Graph;
