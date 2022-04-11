import React from 'react';
import { Portal } from 'react-portal';

import Loader from '../Loader';
import Logo from '../Logo';
import LogoLoaderContainer from './styles';

function LogoLoader() {
  return (
    <Portal>
      <LogoLoaderContainer>
        <Logo />
        <Loader />
      </LogoLoaderContainer>
    </Portal>
  );
}

export default LogoLoader;
