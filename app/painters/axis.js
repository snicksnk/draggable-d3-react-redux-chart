export const xAxis = (settings, xScale) => ctx => {
  const { height, chartOffset } = settings;
  const tickCount = 10;
  const tickSize = 6;
  const ticks = xScale.ticks(tickCount);
  const tickFormat = xScale.tickFormat();

  ctx.beginPath();
  // console.log('xAxis-tick-d', ticks);
  ticks.forEach(d => {
    ctx.moveTo(xScale(d), height - tickSize - chartOffset.y);
    ctx.lineTo(xScale(d), height - chartOffset.y);
  });
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ticks.forEach(d => {
    ctx.fillText(tickFormat(d), xScale(d), height - chartOffset.y - tickSize - 10);
  });
};

export const yAxis = (settings, yScale) => ctx => {
  const { chartOffset } = settings;

  const tickCount = 20;
  const tickSize = 6;
  const ticks = yScale.ticks(tickCount);
  const tickFormat = yScale.tickFormat(tickCount);

  ctx.beginPath();
  ticks.forEach(d => {
    ctx.moveTo(chartOffset.x, yScale(d));
    ctx.lineTo(chartOffset.x + tickSize, yScale(d));
  });

  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ticks.forEach(d => {
    ctx.fillText(tickFormat(d), chartOffset.x, yScale(d));
  });

  ctx.save();
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'right';
  ctx.textBaseline = 'top';
  ctx.font = 'bold 10px sans-serif';
  ctx.restore();
};
