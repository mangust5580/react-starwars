import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { setLocalStorage } from '@utils/localStorage';
import { rootReducer } from './reducers';

export const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => {
  setLocalStorage('store', store.getState().favoriteReducer);
});
