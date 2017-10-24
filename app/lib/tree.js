import * as d3 from 'd3';

export const zoom = canvas => callback => {
  const zoomed = () => {
    callback(d3.event.transform);
  };

  d3.select(canvas).call(d3.zoom().scaleExtent([1, 10]).on('zoom', zoomed));
};
