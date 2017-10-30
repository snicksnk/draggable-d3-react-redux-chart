import React, { Component } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import { zoom as zoomHandler } from '../lib/tree';
import { drawChart } from '../painters/drawChart';

/* eslint-disable jsx-a11y/no-static-element-interactions */
export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.height = 400;
    this.width = 900;
    this.chartOffset = { x: 50, y: 50 };
    this.canvas = null;
    this.draw = this.draw.bind(this);
  }

  componentDidMount() {
    const { updateViewport, startLoadPoints } = this.props.actions;
    zoomHandler(() => true)(this.canvas)(e => {
      const offset = e.x > 0 ? Math.round(e.x) / 7 : 0;
      const limit = Math.round(e.k * 100);
      updateViewport({ offset, limit });
    });
    startLoadPoints();
  }

  draw = (settings, points) => (canvas) => {
    if (canvas) {
      this.canvas = canvas;
      const ctx = canvas.getContext('2d');
      drawChart(settings, points)(ctx);
    }
  };

  render() {
    const settings = { width: this.width, height: this.height, chartOffset: this.chartOffset };
    const { points, limit, offset } = this.props;
    const result = (<div>
      <div>Limit: {limit} Offset: {offset}</div>
      <canvas style={{ cursor: 'move' }} ref={this.draw(settings, points)} width={this.width} height={this.height} onClick={this.onClick} />
    </div>);
    return result;
  }
}

LineChart.propTypes = {
  points: PropTypes.array.isRequired,
  offset: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired
};
