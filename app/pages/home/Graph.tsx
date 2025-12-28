import styled from 'styled-components';
import type { GraphEntry } from './getPosterData';
import GraphSegment, { sizePx as graphSegmentSizePx } from './GraphSegment';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill,  minmax(${graphSegmentSizePx}px, 1fr));
  
  background-color: white;
  padding: 12px;

  --extra-side-padding: calc(
    100%
    - round(down, 100% - 12px*2, ${graphSegmentSizePx}px)
  );

  padding-left: calc(var(--extra-side-padding) / 2);
  padding-right: calc(var(--extra-side-padding) / 2);

  border-radius: 24px;
`;

type Props = {
  data: GraphEntry[];
};

const Graph = ({data}: Props) => {
  const renderGraphSegment = (entry: GraphEntry) => {
    return (
      <GraphSegment
        data={entry}
        isSelected={false}
        key={entry.weekNumber}
      />
    );
  };

  return (
    <Container>
      {
        data.map(renderGraphSegment)
      }
    </Container>
  );
};

export default Graph;
