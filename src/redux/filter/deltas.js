import { name } from './identity';
import { createDeltaActionType, createActionCreator } from '../utilities'

export const ADD_TEXT = createDeltaActionType(name, 'ADD_TEXT');
export const addText = createActionCreator(ADD_TEXT);