import {useContext} from 'react';
import {DefaultTheme, ThemeContext} from 'styled-components';
import {Context} from 'react';

const useTheme = () => useContext<DefaultTheme>(ThemeContext as Context<DefaultTheme>);

export {useTheme};
