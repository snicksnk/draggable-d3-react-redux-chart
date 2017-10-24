import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import chart from './chart';

const rootReducer = combineReducers({
  chart,
  routing
});

export default rootReducer;
