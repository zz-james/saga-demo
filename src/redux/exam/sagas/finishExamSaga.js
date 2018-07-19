import { delay } from 'redux-saga';
import { take } from 'redux-saga/effects'
import { saveAnswerPendingCounter } from '../../question/channel/createCounter'

import {
  FINISH_EXAM
} from '../signals'

// wait for finish exam action

// check if counter is zero

// if not
  // delay 1000 and check again
  // loop

// if is empty
  // yield to api promise

export function* finishExamSaga() {
  console.log("finish exam saga started");
  const action = yield take(FINISH_EXAM);
  console.log('saveAnswerSage: got...', action);
  while(saveAnswerPendingCounter.pending) {
    console.log('waiting for the save answer api call to finish...')
    yield delay(1000)
  }
  console.log('now I do the finish api call')
}
