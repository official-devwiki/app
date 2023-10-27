import 'styled-components';

type ColorBlack = {
  c100: string;
  c200: string;
};

type ColorGray = {
  c000?: string;
  c100?: string;
  c200?: string;
  c300?: string;
  c400?: string;
  c500?: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    dark: {
      primary: string;
      bg: string;
      black: ColorBlack;
      warning: string;
      white: string;
      gray: ColorGray;
    };
    light: {
      primary: string;
      bg: string;
      black: ColorBlack;
      warning: string;
      white: string;
      gray: ColorGray;
    };
  }
}