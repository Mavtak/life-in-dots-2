import styled from 'styled-components';
import type { GraphEntry } from './getPosterData';
import GraphSegment from './GraphSegment';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  border: 1px solid black;
  background-color: white;
  color: black;
  padding: 4px;
  border-radius: 4px;
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
