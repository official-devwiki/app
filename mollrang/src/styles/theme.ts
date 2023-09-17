import {DefaultTheme} from 'styled-components';

export const theme: DefaultTheme = {
  dark: {
    primary: '#778C86',
    white: '#fff',
    gray: {
      c000: '#A6A6A6',
      c200: '#D6D6D6',
    },
    bg: '#383838',
    black: {
      c100: '#222222',
      c200: '#282828',
    },
    warning: '#FF533B'
  },
  light: {
    primary: '#00C7AE',
    white: '#fff',
    gray: {
      c100: '#C6C6C6',
      c200: '#D6D6D6',
      c300: '#D9D9D9',
      c400: '#EFEFEF',
      c500: '#989898',
    },
    bg: '#fff',
    black:{
      c100: '#000000',
      c200: '#444343',
    },
    warning: '#FF5050'
  },
  boxShadow: {
    normal: '0 3px 8px 0 rgb(0 0 0 / 10%)',
    purple: '0 3px 8px 0 #d6c9ff',
    blue: '0 3px 8px 0 #b3e2e6',
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const MIXINS = {
  // flex
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,

  // positions
  positionCenter: (type = 'absolute') => {
    if (type === 'absolute' || type === 'fixed')
      return `
        position: ${type};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `;
    return;
  },
};

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
