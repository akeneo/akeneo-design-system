import styled, {css, keyframes} from 'styled-components';
import {Color, ColorAlternative, FontFamily, FontSize, getColor, getFontSize, Palette} from './theme';

const CommonStyle = css`
  input,
  button,
  select,
  textarea {
    font-family: 'Inter';
    font-size: ${getFontSize('default')};
  }

  font-family: 'Inter';
  font-size: ${getFontSize('default')};
  color: ${getColor('grey', 120)};
  line-height: 20px;
  box-sizing: border-box;
`;

const loadingBreath = keyframes`
  0% {background-position:0 50%}
  50% {background-position:100% 50%}
  100% {background-position:0 50%}
`;

const placeholderStyle = css`
  animation: ${loadingBreath} 2s infinite;
  background: linear-gradient(270deg, #fdfdfd, #eee);
  background-size: 400% 400%;
  border-color: transparent;
  border-style: none;
  color: transparent;
  border-radius: 3px;
  cursor: default;
  outline: none;
  :hover,
  :last-child,
  ::placeholder {
    color: transparent;
  }
  > * {
    opacity: 0;
  }
`;

const color: Color = {
  blue10: '#F0F4FF',
  blue20: '#F0F4FF',
  blue40: '#A3BAFF',
  blue60: '#A3BAFF',
  blue80: '#4B7EFF',
  blue100: '#4B7EFF',
  blue120: '#3B6EEF',
  blue140: '#3B6EEF',
  green10: '#EBF9F5',
  green20: '#EBF9F5',
  green40: '#75DCC2',
  green60: '#75DCC2',
  green80: '#01B47E',
  green100: '#01B47E',
  green120: '#0C8671',
  green140: '#0C8671',
  grey20: '#F8F9FC',
  grey40: '#B4BAC5',
  grey60: '#B4BAC5',
  grey80: '#B4BAC5',
  grey100: '#6D7783',
  grey120: '#230052',
  grey140: '#230052',
  purple10: '#F9F5FF',
  purple20: '#F9F5FF',
  purple40: '#CBA2FE',
  purple60: '#CBA2FE',
  purple80: '#9748FD',
  purple100: '#9748FD',
  purple120: '#8F40F5',
  purple140: '#8F40F5',
  red10: '#FEF6F7',
  red20: '#FEF6F7',
  red40: '#F78A92',
  red60: '#F78A92',
  red80: '#E63946',
  red100: '#E63946',
  red120: '#DF323F',
  red140: '#DF323F',
  yellow10: '#FEF9E6',
  yellow20: '#FEF9E6',
  yellow40: '#FCD973',
  yellow60: '#FCD973',
  yellow80: '#F6BE00',
  yellow100: '#F6BE00',
  yellow120: '#230052',
  yellow140: '#230052',
  brand20: '#F9F5FF',
  brand40: '#CBA2FE',
  brand60: '#CBA2FE',
  brand80: '#9748FD',
  brand100: '#9748FD',
  brand120: '#8F40F5',
  brand140: '#8F40F5',
  white: '#ffffff',
};

const colorAlternative: ColorAlternative = {
  blue10: '#F0F7FC',
  blue100: '#4CA8E0',
  blue120: '#3278B7',
  chocolate10: '#EEE9E5',
  chocolate100: '#512500',
  chocolate120: '#441F00',
  coralRed10: '#FDF0EF',
  coralRed100: '#ED6A5E',
  coralRed120: '#B72215',
  darkBlue10: '#EFEFF8',
  darkBlue100: '#5e63b6',
  darkBlue120: '#3B438C',
  darkCyan10: '#E5F3F3',
  darkCyan100: '#008B8B',
  darkCyan120: '#007575',
  darkPurple10: '#EEEAF2',
  darkPurple100: '#52267D',
  darkPurple120: '#36145E',
  forestGreen10: '#EDF1EB',
  forestGreen100: '#50723C',
  forestGreen120: '#436032',
  green10: '#F5FAFA',
  green100: '#81CCCC',
  green120: '#5DA8A6',
  hotPink10: '#FFF0F7',
  hotPink100: '#FF69B4',
  hotPink120: '#CC0066',
  oliveGreen10: '#F0F4E9',
  oliveGreen100: '#6B8E23',
  oliveGreen120: '#5A771D',
  orange10: '#FFF3E5',
  orange100: '#FF8600',
  orange120: '#B25E00',
  purple10: '#F3EEF9',
  purple100: '#9748FD',
  purple120: '#763E9E',
  red10: '#FDEDF0',
  red100: '#F74B64',
  red120: '#C92343',
  yellow10: '#FEFBF2',
  yellow100: '#FCCE76',
  yellow120: '#D69A38',
};

const fontSize: FontSize = {
  big: '15px',
  bigger: '17px',
  default: '13px',
  small: '11px',
  title: '28px',
};

const palette: Palette = {
  primary: 'purple',
  success: 'green',
  secondary: 'blue',
  tertiary: 'grey',
  warning: 'yellow',
  danger: 'red',
};

const fontFamily: FontFamily = {
  default: 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',
  monospace: 'Courier, "MS Courier New", Prestige, "Everson Mono"',
};

const BrandedPath = styled.path`
  fill: ${getColor('brand', 100)};
`;

const SkeletonPlaceholder = styled.div`
  ${placeholderStyle}
`;

export {
  color,
  colorAlternative,
  fontFamily,
  fontSize,
  palette,
  CommonStyle,
  BrandedPath,
  SkeletonPlaceholder,
  placeholderStyle,
};
