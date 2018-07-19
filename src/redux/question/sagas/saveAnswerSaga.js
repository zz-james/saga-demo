import { delay } from 'redux-saga';
import { take } from 'redux-saga/effects'
import { saveAnswerPendingCounter } from '../channel/createCounter'

import {
  SAVE_ANSWER
} from '../actions'

// wait for saveAnswer action

// increment counter

// yield to api promise (use dalay)

// decrement counter

export function* saveAnswerSaga() {
  while(true) {
    console.log('save answer saga begins!');
    const action = yield take(SAVE_ANSWER);
    console.log('saveAnswerSage: got...', action);
    saveAnswerPendingCounter.pending++;
    console.log('Are we waiting for a save answer to return..', !!saveAnswerPendingCounter.pending);
    yield delay(10000); // this would be the api call
    saveAnswerPendingCounter.pending--;
    console.log('Are we waiting for a save answer to return..', !!saveAnswerPendingCounter.pending);
  }
}

