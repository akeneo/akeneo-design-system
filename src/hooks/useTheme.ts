import {useContext} from 'react';
import {DefaultTheme, ThemeContext} from 'styled-components';

const useTheme = () => {
  // @ts-ignore
  return useContext<DefaultTheme>(ThemeContext);
};

export {useTheme};
