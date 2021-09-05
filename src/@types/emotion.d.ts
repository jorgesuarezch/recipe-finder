import "@emotion/react";
import theme from "../styles/theme";

declare module "@emotion/react" {
  type BaseTheme = typeof theme;
  export interface Theme extends BaseTheme {}
}
