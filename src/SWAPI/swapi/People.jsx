import React from 'react';
import useContextSWAPI from '../hooks/useContextSWAPI';

const People = () => {
  const { people, count, loadPeople, resetPeople } = useContextSWAPI();

  return (
    <>
      <h3>People list</h3>
      <ul>
        {people.map(({ name }, index) => (
          <li key={name}>
            <p>
              <span>{`${index + 1}. `}</span>
              {name}
            </p>
          </li>
        ))}
      </ul>
      {count !== people.length ? (
        <button onClick={loadPeople}>Load More</button>
      ) : (
        <button onClick={resetPeople}>Reset all</button>
      )}
    </>
  );
};

export default People;
