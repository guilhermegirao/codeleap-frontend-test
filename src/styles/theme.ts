import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    background: '#DDDDDD',
    primary: '#000000',
    secondary: '#777777',
    gray: 'rgba(119, 119, 119, 0.8)',
    lightGray: '#999999',
    lightGrayVariant: '#CCCCCC',
    red: '#D8242F',
    white: '#FFFFFF'
  },
  fontFamily: {
    roboto: 'Roboto, sans-serif'
  },
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  }
};

export default theme;
