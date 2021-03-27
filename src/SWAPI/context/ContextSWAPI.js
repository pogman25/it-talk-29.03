import { createContext } from 'react';
import { CONDITIONS } from '../hooks/constants';

const defaultValue = {
  people: [],
  count: 0,
  condition: CONDITIONS.idle,
  loadPeople: () => {},
  resetPeople: () => {},
};

const ContextSWAPI = createContext(defaultValue);

export default ContextSWAPI;
