import React from 'react';
import CircleLoader from 'react-spinners/CircleLoader';

import { PreloaderContainerStyled } from './styled';

const Preloader = () => {
  return (
    <PreloaderContainerStyled>
      <CircleLoader />
    </PreloaderContainerStyled>
  );
};

export default Preloader;
