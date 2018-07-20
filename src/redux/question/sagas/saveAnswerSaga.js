import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects'
import { saveAnswerPendingCounter } from '../channel/createCounter'

import * as signals from '../signals';
import * as deltas from '../deltas';
import { createWatcher } from '../../utilities';


// wait for saveAnswer action
// increment counter
// yield to api promise (use dalay)
// decrement counter

function* saveAnswerSaga(data) {
  console.log('saveAnswerSaga: got...', data);
  saveAnswerPendingCounter.pending++;
  console.log('Are we waiting for a save answer to return..', !!saveAnswerPendingCounter.pending);
  yield delay(10000); // this would be the api call
  saveAnswerPendingCounter.pending--;
  yield put(deltas.updateAnswer('save this answer'));
  console.log('Are we waiting for a save answer to return..', !!saveAnswerPendingCounter.pending);
}

export const watchApplyFilter = createWatcher(signals.SAVE_ANSWER.REQUEST, saveAnswerSaga);

