import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import useContextSWAPI from '../../hooks/useContextSWAPI';

const PersonPreloader = ({ style }) => {
  const { loadPeople, condition } = useContextSWAPI();

  return (
    <li style={style}>
      {condition === 'loading' ? (
        <BeatLoader />
      ) : (
        <button onClick={loadPeople}>Load More</button>
      )}
    </li>
  );
};

export default PersonPreloader;
