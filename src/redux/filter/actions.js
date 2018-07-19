import { name } from './identity';
import { createSignalAction, createDeltaActionType , createActionCreator } from '../../utilities'

// SIGNALS
export const init = createSignalAction(name, 'INIT');
export const apply_filter = createSignalAction(name, 'APPLY_FILTER');

// DELTAS
debugger
export const MERGE_FILTERS = createDeltaActionType(name, 'MERGE_FILTERS');
export const mergeFilters = createActionCreator(MERGE_FILTERS);