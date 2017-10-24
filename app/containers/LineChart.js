import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as chartActions from '../actions/chart';
import { getPointsInViewport } from '../selectors/chart';
import LineChart from '../components/LineChart';

const MindMap = ({ actions, points, offset, limit }) => (<LineChart actions={actions} points={points} offset={offset} limit={limit} />);

const mapStateToProps = (state) => ({
  points: getPointsInViewport(state),
  offset: state.chart.offset,
  limit: state.chart.limit
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(chartActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MindMap);
