import React from 'react';

import ContextProviderSWAPI from '../context/ContextProviderSWAPI';
import People from './People';

const SWAPI = () => {
  return (
    <ContextProviderSWAPI>
      <People/>
    </ContextProviderSWAPI>
  );
};

export default SWAPI;
