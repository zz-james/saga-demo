import { name } from './identity';
import { createDeltaActionType, createActionCreator } from '../utilities'

export const UPDATE_ANSWER = createDeltaActionType(name, 'UPDATE_ANSWER');
export const updateAnswer = createActionCreator(UPDATE_ANSWER);