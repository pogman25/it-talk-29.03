import React, { useEffect } from 'react';
import useGetPeople from '../hooks/useGetPeople';

const SWAPI = () => {
  const { people, loadPeople } = useGetPeople();

  useEffect(() => {
    loadPeople();
  }, []);

  return (
    <div>
      <ul>
        {people.map(({ name }) => (
          <li key={name}>
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SWAPI;
