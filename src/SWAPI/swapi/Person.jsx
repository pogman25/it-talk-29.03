import React, { useEffect } from 'react';

const Person = ({ name, style, index, isUploadNeed, loadPeople }) => {
  useEffect(() => {
    if (isUploadNeed) {
      loadPeople();
    }
  }, []);

  return (
    <li key={name} style={style}>
      <p>
        <span>{`${index + 1}. `}</span>
        {name}
      </p>
    </li>
  );
};

export default Person;
