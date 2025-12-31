import styled from 'styled-components';
import type Direction from './Direction';

const Container = styled.div<{
  $direction: Direction
}>`
  display: flex;

  ${({ $direction }) =>
    $direction === 'bottom-to-top' &&
    `
    flex-direction: column-reverse;
    flex-start: end;
  `}
  
  ${({ $direction }) =>
    $direction === 'left-to-right' &&
    `
    flex-direction: row;
    flex-start: start;
  `}

  ${({ $direction }) =>
    $direction === 'right-to-left' &&
    `
    flex-direction: row-reverse;
    flex-start: end;
  `}

  ${({ $direction }) =>
    $direction === 'top-to-bottom' &&
    `
    flex-direction: column;
    flex-start: start;
  `}
`;

export default Container;
