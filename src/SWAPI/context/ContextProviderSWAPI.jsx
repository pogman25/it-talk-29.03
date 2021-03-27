import React, { useEffect } from 'react';

import ContextSWAPI from './ContextSWAPI';

import useGetPeople from '../hooks/useGetPeople';

const ContextProviderSWAPI = ({ children }) => {
  const state = useGetPeople();

  useEffect(() => {
    state.loadPeople();
  }, []);

  return (
    <ContextSWAPI.Provider value={state}>{children}</ContextSWAPI.Provider>
  );
};

export default ContextProviderSWAPI;
