import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      lightGreen: string;
    };
    weightFonts: {
      OpenSans: {
        light: number;
        regular: number;
      };
      Neuton: {
        extraLight: number;
        light: number;
        regular: number;
        bold: number;
        extraBold: number;
      };
    };

    font: { OpenSans: string; Neuton: string };
  }
}
