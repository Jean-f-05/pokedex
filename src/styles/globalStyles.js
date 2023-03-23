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
      
};

p, a{
    font-size: 2rem;
    line-height: var(--medium);
    cursor: pointer;
  };

a {
    color: var(--red) ;
  }
`;

export default GlobalStyle;