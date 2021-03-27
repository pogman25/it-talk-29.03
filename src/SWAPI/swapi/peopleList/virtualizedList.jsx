import React from 'react';
import { FixedSizeList as List } from 'react-window';

import { Person, PersonPreloader } from '../person';
import useContextSWAPI from '../../hooks/useContextSWAPI';

const VirtualizedList = () => {
  const { people, count } = useContextSWAPI();

  const isAllPeopleLoaded = count === people.length;

  return (
    <List
      height={300}
      itemData={people}
      itemCount={people.length + !isAllPeopleLoaded}
      itemSize={30}
    >
      {({ data, style, index }) =>
        index + 1 > people.length ? (
          <PersonPreloader style={style} />
        ) : (
          <Person name={data[index].name} style={style} index={index} />
        )
      }
    </List>
  );
};

export default VirtualizedList;
