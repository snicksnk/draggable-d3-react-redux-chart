import { createSelector } from 'reselect';

const getPoints = state => state.chart.points;
const getLimit = state => state.chart.limit;
const getOffset = state => state.chart.offset;

export const getPointsInViewport = createSelector(
  [getPoints, getOffset, getLimit],
  (points, offset, limit) => {
    const maxTime = points[points.length - 1].time;
    return points.filter(point => point.time < (maxTime - offset) && point.time > (maxTime - offset - limit));
  }
);
