import { delay } from 'redux-saga';
import { take } from 'redux-saga/effects';
import { saveAnswerPendingCounter } from '../../question/channel/createCounter'
import * as signals from '../signals';
// import * as deltas from '../deltas';
import { createWatcher } from '../../utilities';

function* finishExamSaga(data) {
  console.log('finishExamSaga: got...', data);
  while(saveAnswerPendingCounter.pending) {
    console.log('waiting for the save answer api call to finish...')
    yield delay(1000)
  }
  console.log('now I do the finish api call')
}

export const watchFinishExam = createWatcher(signals.FINISH_EXAM.REQUEST, finishExamSaga);