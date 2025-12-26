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
    
    background-color: #160025;
  }

  body {
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
    padding: 25px;
  }
`;

export default GlobalStyles;
