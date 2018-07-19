import { createReducer } from '../utilities';
import * as deltas from './deltas';

export const filter = createReducer(null, {
  [deltas.ADD_TEXT](state,{data}) {
    return data;
  }
});
