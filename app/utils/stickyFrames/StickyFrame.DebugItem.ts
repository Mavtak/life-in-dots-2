import styled from 'styled-components';
import type Direction from './Direction';

const DebugItem = styled.div<{
  $direction: Direction
}>`
  display: flex;
  justify-content: center;

  font-family: monospace;

  color: white;
  background-color: #4d007fe8;
  border: 2px solid orangered;
  padding: 1em;

  backdrop-filter: blur(3px);

  ${({ $direction }) =>
    $direction === 'left-to-right' &&
    `
    writing-mode: vertical-lr;
  `}

  ${({ $direction }) =>
    $direction === 'right-to-left' &&
    `
    writing-mode: vertical-rl;
  `}
`;

export default DebugItem;
