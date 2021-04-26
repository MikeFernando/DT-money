import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  :root {
    --background: #f2f2f5;
    --red: #E52E4D;
    --blue: #5429cc;

    --blue-light: #6933FF;
    
    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #FFFFFF;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%; // 15 px
    }
  }

   @media(max-width: 720px) {
    html {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
