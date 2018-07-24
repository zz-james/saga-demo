import { name } from './identity';
import { createSignalAction, createActionCreator } from '../utilities'

export const SAVE_ANSWER = createSignalAction(name, 'SAVE_ANSWER');