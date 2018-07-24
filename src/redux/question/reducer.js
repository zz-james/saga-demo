import { createReducer } from '../utilities';
import * as deltas from './deltas';

export const question = createReducer(null, {
  [deltas.UPDATE_ANSWER](state,{data}) {
    return data;
  }
});