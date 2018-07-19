
import * as signals from '../signals';
//import { actions as stockActions } from 'modules/stock';

import { take, fork } from 'redux-saga/effects';
import { createWatcher } from '../../../utilities';


function* mergeFilterSaga(filter) {
  console.log('well you got here');
}


export function* watchMergeFilter() {
  while(true) {
    const { data } = yield take(signals.APPLY_FILTER.REQUEST);
    yield fork(mergeFilterSaga, data);
  }
}

//const watcherGen = createWatcher(signals.APPLY_FILTER, mergeFilterSaga);


