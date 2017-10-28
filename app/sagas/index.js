import { put, fork, takeEvery, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { watchStartLoadPoints } from './chartData';

export default function* rootSaga() {
  yield all([
    watchStartLoadPoints()
  ]);
}
