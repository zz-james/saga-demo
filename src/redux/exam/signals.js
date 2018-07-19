import { name } from './identity';
import { createSignalAction, createActionCreator } from '../utilities'

export const FINISH_EXAM = createSignalAction(name, 'FINISH_EXAM');