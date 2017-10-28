import { put, takeEvery } from 'redux-saga/effects';

function* startLoadPoints(action) {
  const timestamp = Date.now();

  const points = [];
  for (let i = 0; i < 1000; i += 1) {
    const time = timestamp - i;
    const value = Math.round(Math.random() * 1000);
    points.unshift({ value, time });
  }
  yield put({
    type: 'CHART_POINTS_ADD',
    payload: {
      points
    }
  });
}

export function* watchStartLoadPoints() {
  yield takeEvery('CHART_POINTS_LOAD_START', startLoadPoints);
}
