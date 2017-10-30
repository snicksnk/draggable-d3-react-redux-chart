const initialState = {
  points: [
  ],
  offset: 0,
  limit: 100,
  maxTime: 0,
  minTime: 0,
  timeRange: [0, 0]
};

const nodes = (state = initialState, action) => {
  switch (action.type) {
  case 'CHART_VIEWPORT_UPDATE': {
    const { timeRange } = state;
    const { offset, limit } = action.payload;
    const currentViewportEnd = timeRange[1] - offset - limit;
    return (currentViewportEnd >= timeRange[0]) ? { ...state, offset, limit } : state;
  }
  case 'CHART_POINTS_ADD': {
    const { points: newPoints } = action.payload;
    const points = [...state.points, ...newPoints].sort((point1, point2) => point1.time - point2.time);

    let timeRange = [0, 0];
    if (points.length > 0) {
      console.log('points--', points[0]);
      const minTime = points[0].time;
      const maxTime = points[points.length - 1].time;
      timeRange = [minTime, maxTime];
    }

    return { ...state, points, timeRange };
  }
  default:
    return state;
  }
};

export default nodes;
