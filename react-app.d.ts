/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      primary: string;
      secondary?: string;
      white: string;
      border: string;
      text: {
        primary: string;
        secondary: string;
      };
      bg: {
        primary: string;
        secondary: string;
        thirty: string;
      };
    };
    breakpoints: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }
}
