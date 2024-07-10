import 'styled-components';
import {Color, ColorAlternative, FontSize, Palette} from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    palette: Palette;
    fontSize: FontSize;
    color: Color;
    colorAlternative: ColorAlternative;
    fontFamily: FontFamily;
  }
}
