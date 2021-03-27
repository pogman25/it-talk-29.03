import { useReducer, useCallback } from 'react';
import axios from 'axios';

import { ACTIONS, CONDITIONS, PEOPLE_URL } from './constants';

import { searchPageFromQuery } from '../utils/searchParse';

const initialReducer = {
  condition: CONDITIONS.idle,
  people: [],
  count: null,
  next: null,
  previous: null,
};

const reducer = (state = initialReducer, action) => {
  switch (action.type) {
    case ACTIONS.sendRequest:
      if (state.people.length === 0) {
        return { ...state, condition: CONDITIONS.firstLoading };
      } else {
        return { ...state, condition: CONDITIONS.loading };
      }
    case ACTIONS.fulfilled:
      return {
        condition: CONDITIONS.idle,
        people: [...state.people, ...action.payload.people],
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
      };
    case ACTIONS.rejected:
      return { ...state, condition: CONDITIONS.idle };
    case ACTIONS.resetPeople:
      return initialReducer;
    default:
      return state;
  }
};

function useGetPeople() {
  const [{ people, count, next, condition }, dispatch] = useReducer(
    reducer,
    initialReducer
  );

  const loadPeople = useCallback(async () => {
    try {
      const params = next ? { page: next } : {};
      const { data, status } = await axios(PEOPLE_URL, { params });
      if (status === 200) {
        const { results, count, next, previous } = data;
        const nextPageNumber = searchPageFromQuery(next);
        const previousPageNumber = searchPageFromQuery(previous);

        const payload = {
          people: results,
          count,
          next: nextPageNumber,
          previous: previousPageNumber,
        };

        dispatch({
          type: ACTIONS.fulfilled,
          payload,
        });
      } else {
        console.log('There should be a valid handler');
        dispatch({ type: ACTIONS.rejected });
      }
    } catch (e) {
      console.error(
        'There should be a valid error handler, but now you get this: ',
        e
      );
      dispatch({ type: ACTIONS.rejected });
    }
  }, [next]);

  const resetPeople = useCallback(() => {
    dispatch({ type: ACTIONS.resetPeople });
  }, []);

  return { people, count, condition, loadPeople, resetPeople };
}

export default useGetPeople;
