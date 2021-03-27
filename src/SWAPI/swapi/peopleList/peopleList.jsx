import React, { useEffect } from 'react';

import VirtualizedList from './virtualizedList';
import Preloader from './preloader';

import useContextSWAPI from '../../hooks/useContextSWAPI';

const PeopleList = () => {
  const {
    people,
    count,
    condition,
    loadPeople,
    resetPeople,
  } = useContextSWAPI();

  const isAllPeopleLoaded = count === people.length;

  useEffect(() => {
    loadPeople();
  }, []);

  return (
    <>
      <h3>People list</h3>
      <ul id="js-peopleList">
        {condition === 'firstLoading' ? <Preloader /> : <VirtualizedList />}
      </ul>
      {isAllPeopleLoaded && <button onClick={resetPeople}>Reset all</button>}
    </>
  );
};

export default PeopleList;
