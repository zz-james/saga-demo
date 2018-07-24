import * as signals from '../signals';
import { createWatcher } from '../../utilities';

// triggered by applyFilterSaga
function* applyFilterSucessSaga(filter) {
  console.log('if we need to write to a log or something we can do it here')
}


export const watchMergeFilter = createWatcher(signals.APPLY_FILTER.SUCCESS, applyFilterSucessSaga);