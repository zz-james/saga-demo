import { name } from './identity';
import { createSignalAction, createActionCreator } from '../utilities'

export const APPLY_FILTER = createSignalAction(name, 'APPLY_FILTER');