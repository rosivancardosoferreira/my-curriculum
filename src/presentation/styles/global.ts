import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    color-scheme: dark;
  }

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
    background-color: ${props => props.theme.colors.Primary};
    #__next {
        display: flex;
        flex-direction: column;
        row-gap: 70px;
    }
  }
  .hidden__scroll {
    @media screen and (max-width: 768px) {
      overflow: hidden;
    }
  }
`;
