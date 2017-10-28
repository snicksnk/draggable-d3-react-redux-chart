import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  sagaMiddleware.run(rootSaga);
  return createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );
}
