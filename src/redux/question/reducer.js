import { createReducer } from '../../utilities';
import { fromJS} from 'immutable'
import {
    SAVE_ANSWER
} from './signals'

export const answer = createReducer(null, {
    [SAVE_ANSWER](state,{}) {
        return fromJS(state);
    }
});