import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
};

html {
    font-size: 62.5%;
   
};

body {
    font-family: 'Lato', sans-serif;
      background-color: #FCE2DB;
      overflow-x: hidden;
};

p, a{
    font-size: 2rem;
    line-height: 1rem;
    cursor: pointer;
  };

a {
    color:#FF0000;
  }

  li {
    list-style-type: none;
  }
`;

export default GlobalStyle;