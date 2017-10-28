const initialState = {
  points: [
  ],
  offset: 0,
  limit: 100
};

const nodes = (state = initialState, action) => {
  switch (action.type) {
  case 'CHART_VIEWPORT_UPDATE': {
    const { offset, limit } = action.payload;
    const newLimit = limit;
    return { ...state, offset, limit: newLimit };
  }
  case 'CHART_POINTS_ADD': {
    const { points } = action.payload;
    return { ...state, points: [...state.points, ...points] };
  }
  default:
    return state;
  }
};

export default nodes;
