import { useContext } from 'react';

import ContextSWAPI from '../context/ContextSWAPI';

const useContextSWAPI = () => useContext(ContextSWAPI);

export default useContextSWAPI;
