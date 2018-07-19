import { name } from './identity';
import { createSignalAction, createDeltaAction, createActionCreator } from '../../utilities'

// SIGNALS
export const init = createSignalAction(name, 'INIT');
export const apply_filter = createSignalAction(name, 'APPLY_FILTER');

// DELTAS
export const merge_filters = createDeltaAction(name, 'MERGE_FILTERS');
export const mergeFilters = createActionCreator(merge_filters);