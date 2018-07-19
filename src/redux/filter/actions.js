import { name } from './identity';
import { createSignalAction, createDeltaActionType, makeActionCreator } from '../../utilities'

// SIGNALS
// export const init = createSignalAction(name, 'INIT');
// export const apply_filter = createSignalAction(name, 'APPLY_FILTER');

// DELTAS
export const MERGE_FILTERS = createDeltaActionType(name, 'MERGE_FILTERS');
export const mergeFilters = makeActionCreator(MERGE_FILTERS);