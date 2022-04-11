import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';

import GlobalStyle from '@/styles/global';
import AppRoutes from '@/routes/AppRoutes';
import theme from '@/styles/theme';
import store from '@/redux/store';

import 'intersection-observer';

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
