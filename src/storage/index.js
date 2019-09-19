import { createStore } from 'redux';
import reducers from 'reducers';

export const init = () => {
  const store = createStore(reducers, initialState);

  return store;
}
