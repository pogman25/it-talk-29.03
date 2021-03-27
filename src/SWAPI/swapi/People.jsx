import React, { useRef } from 'react';
import { FixedSizeList as List } from 'react-window';

import Person from './Person';

import useContextSWAPI from '../hooks/useContextSWAPI';

const People = () => {
  const { people, count, loadPeople, resetPeople } = useContextSWAPI();
  const listRef = useRef();

  const loadMore = () => {};

  return (
    <>
      <h3>People list</h3>
      <ul>
        <List
          ref={listRef}
          height={300}
          itemData={people}
          itemCount={people.length}
          itemSize={30}
        >
          {({ data, style, index }) => (
            <Person
              name={data[index].name}
              style={style}
              index={index}
              isUploadNeed={
                index + 1 === people.length && count !== people.length
              }
              loadPeople={loadPeople}
            />
          )}
        </List>
      </ul>
      {count === people.length && (
        <button onClick={resetPeople}>Reset all</button>
      )}
    </>
  );
};

export default People;
