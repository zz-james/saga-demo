import { take, fork } from 'redux-saga/effects';

export const createWatcher = function(action, fn) {
  return function* () {
    while(true) {
      const { data } = yield take(action);
      yield fork(fn, data);
    }
  }
}