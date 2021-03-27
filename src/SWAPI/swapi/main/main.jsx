import React from 'react';

import ContextProviderSWAPI from '../../context/ContextProviderSWAPI';

import PeopleList from '../peopleList';

const Main = () => {
  return (
    <ContextProviderSWAPI>
      <PeopleList />
    </ContextProviderSWAPI>
  );
};

export default Main;
