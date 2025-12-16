import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    scroll-behavior: smooth;
  }
`;

export default GlobalStyles;
