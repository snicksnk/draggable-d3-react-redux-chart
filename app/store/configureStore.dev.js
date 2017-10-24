import { createStore } from 'redux';
import rootReducer from '../reducers';
// import DevTools from '../containers/DevTools';

/* eslint-disable no-underscore-dangle */
export default function configureStore(initialState) {
  const store = createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        // DevTools.instrument()
    );
/* eslint-enable */
  return store;
}
