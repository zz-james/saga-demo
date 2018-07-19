import { name } from './identity';
import { createDeltaActionType, createActionCreator } from '../../utilities'

export const MERGE_FILTERS = createDeltaActionType(name, 'MERGE_FILTERS');
export const mergeFilters = createActionCreator(MERGE_FILTERS);