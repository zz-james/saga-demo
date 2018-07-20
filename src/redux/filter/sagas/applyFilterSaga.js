import * as signals from '../signals';
import * as deltas from '../deltas';
import { createWatcher } from '../../utilities';

import { put } from 'redux-saga/effects';


// triggered by UI component
function* applyFilterSaga(data) {
  try {
    yield put(deltas.addText(data));
    yield put(signals.APPLY_FILTER.success());
  } catch (error) {
    yield put(signals.APPLY_FILTER.failure(error));
  }
}

export const watchApplyFilter = createWatcher(signals.APPLY_FILTER.REQUEST, applyFilterSaga);