import { delay } from 'redux-saga'

export function* demoSaga() {
  while (true) {
    yield delay(100000);
    console.info("user saga loop");
  }
}