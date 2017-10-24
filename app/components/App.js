import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({ children }) =>
  <div>
    { children }
  </div>;

App.defaultProps = {
  children: null
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
