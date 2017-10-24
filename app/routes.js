import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LineChart from './containers/LineChart';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LineChart} />
    <Route path="/line-chart" component={LineChart} />
  </Route>
);
