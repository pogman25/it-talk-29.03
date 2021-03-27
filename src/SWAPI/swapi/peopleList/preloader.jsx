import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

import { PreloaderContainerStyled } from './styled';

const Preloader = () => {
  return (
    <PreloaderContainerStyled>
      <PuffLoader />
    </PreloaderContainerStyled>
  );
};

export default Preloader;
