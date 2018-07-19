import * as signals from '../signals';
import * as deltas from '../deltas';
import { createWatcher } from '../../utilities';

import { put } from 'redux-saga/effects';


// triggered by UI component
function* applyFilterSaga(filter) {
  try {
    yield put(deltas.addText('this is a test'));
    yield put(signals.APPLY_FILTER.success());
  } catch (error) {
    yield put(signals.APPLY_FILTER.failure(error));
  }
}

export const watchApplyFilter = createWatcher(signals.APPLY_FILTER.REQUEST, applyFilterSaga);