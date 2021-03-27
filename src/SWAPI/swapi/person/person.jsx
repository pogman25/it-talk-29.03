import React from 'react';

const Person = ({ name, style, index }) => {
  return (
    <li style={style}>
      <p>
        <span>{`${index + 1}. `}</span>
        {name}
      </p>
    </li>
  );
};

export default Person;
