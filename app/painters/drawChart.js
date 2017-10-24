import * as d3 from 'd3';
/* eslint-disable no-param-reassign */
const applyDraw = ctx => painter => {
  ctx.save();
  painter(ctx);
  ctx.restore();
};

const drawText = node => ctx => {
  const { x, y, data: { title } } = node;
  ctx.font = '10px Arial';
  ctx.fillText(title, x, y);
};

const drawNode = node => ctx => {
  const { x, y, data: { isSelected } } = node;
  ctx.beginPath();
  if (isSelected) {
    ctx.strokeStyle = 'red';
  }
  ctx.arc(x, y, 50, 0, 2 * Math.PI);
  ctx.stroke();
};

const drawLine = (settings, scales, points) => ctx => {
  const { height, chartOffset } = settings;
  const { xScale, yScale } = scales;
  const line = d3.line()
    .x(d => xScale(d.time))
    .y(d => yScale(d.value))
    .context(ctx);

  const area = d3.area()
    .x(d => xScale(d.time))
    .y1(d => yScale(d.value))
    .y0(() => height - chartOffset.y)
    .context(ctx);

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.fillStyle = '#90AFDC';
  ctx.strokeStyle = '#285E71';
  area(points);
  ctx.fill();
  line(points);
  ctx.stroke();
};

export const drawChart = (settings, points) => ctx => {
  const { width, height, chartOffset } = settings;
  const applyD = applyDraw(ctx);
  ctx.save();

  const valueRange = [
    d3.min(points, point => point.value),
    d3.max(points, point => point.value)
  ];

  const yScale = d3.scaleLinear()
      .domain(valueRange)
      .range([chartOffset.y, height - chartOffset.y]);

  const timeRange = [
    d3.min(points, point => point.time),
    d3.max(points, point => point.time)
  ];

  const xScale = d3.scaleTime()
      .domain(timeRange)
      .range([chartOffset.x, width - chartOffset.x]);

  ctx.clearRect(0, 0, width, height);

  applyD(drawLine({ height, chartOffset }, { xScale, yScale }, points));
  ctx.restore();
};
