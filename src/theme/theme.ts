type FontSize = {
  big: string;
  bigger: string;
  default: string;
  small: string;
  title: string;
};

type Color = {
  blue10: string;
  blue100: string;
  blue120: string;
  blue140: string;
  blue20: string;
  blue40: string;
  blue60: string;
  blue80: string;
  green100: string;
  green120: string;
  green140: string;
  green10: string;
  green20: string;
  green40: string;
  green60: string;
  green80: string;
  grey100: string;
  grey120: string;
  grey140: string;
  grey20: string;
  grey40: string;
  grey60: string;
  grey80: string;
  purple100: string;
  purple120: string;
  purple140: string;
  purple20: string;
  purple40: string;
  purple60: string;
  purple80: string;
  red10: string;
  red100: string;
  red120: string;
  red140: string;
  red20: string;
  red40: string;
  red60: string;
  red80: string;
  yellow10: string;
  yellow100: string;
  yellow120: string;
  yellow140: string;
  yellow20: string;
  yellow40: string;
  yellow60: string;
  yellow80: string;
  brand20: string;
  brand40: string;
  brand60: string;
  brand80: string;
  brand100: string;
  brand120: string;
  brand140: string;
  white: string;
};

type ColorAlternative = {
  blue10: string;
  blue100: string;
  blue120: string;
  chocolate10: string;
  chocolate100: string;
  chocolate120: string;
  coralRed10: string;
  coralRed100: string;
  coralRed120: string;
  darkBlue10: string;
  darkBlue100: string;
  darkBlue120: string;
  darkCyan10: string;
  darkCyan100: string;
  darkCyan120: string;
  darkPurple10: string;
  darkPurple100: string;
  darkPurple120: string;
  forestGreen10: string;
  forestGreen100: string;
  forestGreen120: string;
  green10: string;
  green100: string;
  green120: string;
  hotPink10: string;
  hotPink100: string;
  hotPink120: string;
  oliveGreen10: string;
  oliveGreen100: string;
  oliveGreen120: string;
  orange10: string;
  orange100: string;
  orange120: string;
  purple10: string;
  purple100: string;
  purple120: string;
  red10: string;
  red100: string;
  red120: string;
  yellow10: string;
  yellow100: string;
  yellow120: string;
};

type Palette = {
  primary: string;
  secondary: string;
  tertiary: string;
  warning: string;
  danger: string;
};

type Theme = {
  name: string;
  palette: Palette;
  fontSize: FontSize;
  color: Color;
  colorAlternative: ColorAlternative;
  fontFamily: FontFamily;
};

type FontFamily = {
  default: string;
  monospace: string;
};

type Level = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';

const getColor =
  (color: string, gradient?: number): ((props: AkeneoThemedProps) => string) =>
  ({theme}: AkeneoThemedProps): string =>
    theme.color[`${color}${gradient ?? ''}` as keyof Color];

const getColorForLevel =
  (level: Level, gradient: number): ((props: AkeneoThemedProps) => string) =>
  ({theme}: AkeneoThemedProps): string =>
    theme.color[`${theme.palette[level]}${gradient}` as keyof Color];

const getColorAlternative =
  (color: string, gradient?: number): ((props: AkeneoThemedProps) => string) =>
  ({theme}: AkeneoThemedProps): string =>
    theme.colorAlternative[`${color}${gradient ?? ''}` as keyof ColorAlternative];

const getFontSize =
  (fontSize: keyof FontSize): ((props: AkeneoThemedProps) => string) =>
  ({theme}: AkeneoThemedProps): string =>
    theme.fontSize[fontSize];

const getFontFamily =
  (fontFamilyType: keyof FontFamily): ((props: AkeneoThemedProps) => string) =>
  ({theme}: AkeneoThemedProps): string =>
    theme.fontFamily[fontFamilyType];

export type AkeneoThemedProps = {
  theme: Theme;
};
export type {Theme, FontSize, FontFamily, Color, ColorAlternative, Level, Palette};
export {getColor, getFontFamily, getColorForLevel, getColorAlternative, getFontSize};
