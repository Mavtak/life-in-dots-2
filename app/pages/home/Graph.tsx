import styled from 'styled-components';
import type { GraphEntry } from './getPosterData';
import GraphSegment, { sizePx as graphSegmentSizePx } from './GraphSegment';

const Container = styled.div`
  width: round(down, 100%, ${graphSegmentSizePx}px);
  display: grid;
  grid-template-columns: repeat(auto-fill,  minmax(${graphSegmentSizePx}px, 1fr));
  
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
            <GraphSegment
              data={entry}
              key={entry.weekNumber}
            />
          );
        })
      }
    </Container>
  );
};

export default Graph;
