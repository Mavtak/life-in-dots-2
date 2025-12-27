import styled from 'styled-components';
import type { GraphEntry } from './getPosterData';

export const sizePx = 12;

const Container = styled.div<{
  data: GraphEntry
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  --size: ${sizePx}px;

  width: var(--size);
  height: var(--size);
  font-size: var(--size);

  ${({data}) => data.isBirthWeek && `
    font-weight: 700;
  `}

  ${({data}) => !data.isBirthWeek && `
    font-size: calc(var(--size) * 2);
  `}

  ${({data}) => data.hasPassed && !data.isBirthWeek && `
    color: #aaaaaa;

  `}
  
  ${({data}) => data.hasPassed && data.isBirthWeek && `
    color: #555555;
  `}

  ${({data}) =>  !data.hasPassed  && !data.isBirthWeek && `
    color: #444444;
  `}

  ${({data}) =>  !data.hasPassed  && data.isBirthWeek && `
    color: #000000;
  `}
`;

type Props = {
  data: GraphEntry,
};

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