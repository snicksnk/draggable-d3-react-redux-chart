import { put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* startLoadPoints(action) {
  function createPoints(length) {
    const timestamp = Date.now();
    const points = [];
    for (let i = 0; i < 1000; i += 1) {
      const time = timestamp - i;
      const value = Math.round(Math.random() * 1000);
      points.unshift({ value, time });
    }
    return points;
  }
  yield put({
    type: 'CHART_POINTS_ADD',
    payload: {
      points: createPoints(1000)
    }
  });

  // eslint-disable-next-line
  /*
  while (true) {
    yield delay(1000);
    yield put({
      type: 'CHART_POINTS_ADD',
      payload: {
        points: createPoints(1)
      }
    });
    console.log('loggg');
  }
  */
}

export function* watchStartLoadPoints() {
  yield takeEvery('CHART_POINTS_LOAD_START', startLoadPoints);
}
