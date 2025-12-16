import styled from 'styled-components';
import type { GraphEntry } from './getPosterData';

const Container = styled.div<{
  data: GraphEntry
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  --size: 14px;

  width: var(--size);
  height: var(--size);
  font-size: var(--size);

  ${({data}) => data.hasPassed && `
    font-weight: 700;
  `}
`;

type Props = {
  data: GraphEntry,
}

const GraphSegment = ({data}: Props) => {
  const renderValue = () => {
    if (data.isBirthWeek) {
      return String(data.age);
    }

    if (data.hasPassed) {
      return "×";
    }

    return "∙";
  };

  return (
    <Container data={data} >
      {renderValue()}
    </Container>
  );
};

export default GraphSegment;