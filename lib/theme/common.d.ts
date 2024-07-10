/// <reference types="react" />
import { Color, ColorAlternative, FontFamily, FontSize, Palette } from './theme';
declare const CommonStyle: import("styled-components").RuleSet<object>;
declare const placeholderStyle: import("styled-components").RuleSet<object>;
declare const color: Color;
declare const colorAlternative: ColorAlternative;
declare const fontSize: FontSize;
declare const palette: Palette;
declare const fontFamily: FontFamily;
declare const BrandedPath: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").SVGProps<SVGPathElement>, never>> & string;
declare const SkeletonPlaceholder: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export { color, colorAlternative, fontFamily, fontSize, palette, CommonStyle, BrandedPath, SkeletonPlaceholder, placeholderStyle, };
