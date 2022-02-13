import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    outline: unset;
  }

  ul {
    list-style: none;
  }
  
  
  a {
    text-decoration: none;
  }

  html {
    height: -webkit-fill-available;
    scroll-behavior: smooth;
  }

  body {
    background: #FFFFFF;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    position: relative;
    #__next {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        display: grid;
    }
  }
`;
