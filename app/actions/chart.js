export function updateViewport({ offset, limit }) {
  return {
    type: 'CHART_VIEWPORT_UPDATE',
    payload: {
      offset, limit
    }
  };
}

export function startLoadPoints() {
  return {
    type: 'CHART_POINTS_LOAD_START',
    payload: {
    }
  };
}
