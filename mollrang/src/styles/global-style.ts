import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    min-width: 320px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  body[data-theme="light"] {
    // major(theme)
    --primary: #00C7AE;
    --blockquote: #FFE588;
    --warning: #FF5050;

    /**
      ICON
   */
    --blub: #FFC700;
    --check_box: #B8B8B8;
    
    // TEXT
    --major-text: #444343;
    --caption-text: #D6D6D6;
    
    --bg: #fff;
    --bg_modal: #fff;
  }

  body[data-theme="dark"] {
    --primary: #778C86;
    --blockquote: #282828;
    --waning: #FF533B;
    
    /**
      ICON
     */
    --blub: #ECECEC;
    --check_box: #B8B8B8;

    --major-text: #fff;
    --caption-text: #6D6D6;
    
    --bg: #383838;
    --bg_modal: #272727;
  }
`;
