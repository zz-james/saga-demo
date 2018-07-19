import { createReducer } from '../utilities';
import * as deltas from './deltas';

export const exam = createReducer(null, {
  [deltas.ADD_TEXT](state,{}) {
    return { 
      ...state,
      text: action.data, 
    }
  }
});