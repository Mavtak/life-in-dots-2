import styled from 'styled-components';
import type { GraphEntry } from './getPosterData';
import GraphSegment, { sizePx } from './GraphSegment';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill,  minmax(${sizePx}px, 1fr));
  
  background-color: white;
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
