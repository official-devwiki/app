import 'styled-components';
import {ColorTheme, MediaQueryTheme, MixinsTheme} from "@styles/theme";

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: ColorTheme,
      light: ColorTheme
    }
    media: MediaQueryTheme,
    mixins: MixinsTheme,
  }
}