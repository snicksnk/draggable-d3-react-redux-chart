export function updateViewport({ offset, limit }) {
  return {
    type: 'CHART_VIEWPORT_UPDATE',
    payload: {
      offset, limit
    }
  };
}
