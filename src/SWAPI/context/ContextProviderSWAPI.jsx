import React from 'react';

import ContextSWAPI from './ContextSWAPI';

import useGetPeople from '../hooks/useGetPeople';

const ContextProviderSWAPI = ({ children }) => {
  const state = useGetPeople();

  return (
    <ContextSWAPI.Provider value={state}>{children}</ContextSWAPI.Provider>
  );
};

export default ContextProviderSWAPI;
