import { name } from './identity';
import { createSignalAction, createDeltaAction, makeActionCreator } from '../utilities';

// SIGNALS
export const INIT = createSignalAction(name, 'INIT');
export const FILTER_STOCKS = createSignalAction(name, 'FILTER_STOCKS');

// DELTAS
export const MERGE_STOCKS = createDeltaAction(name, 'MERGE_STOCKS');
export const mergeStocks = makeActionCreator(MERGE_STOCKS);

/* 
INIT == {
  REQUEST: 'SIGNAL/STOCKS/INIT/REQUEST',
  SUCCESS: 'SIGNAL/STOCKS/INIT/SUCCESS',
  FAILURE: 'SIGNAL/STOCKS/INIT/FAILURE',
  request: (arg) => { type: 'SIGNAL/STOCKS/INIT/REQUEST', data: arg },
  success: (arg) => { type: 'SIGNAL/STOCKS/INIT/SUCCESS', data: arg },
  failure: (arg) => { type: 'SIGNAL/STOCKS/INIT/FAILURE', data: arg },
}
MERGE_STOCKS == 'DELTA/STOCKS/MERGE_STOCKS';
mergeStocks == (arg) => { type: 'DELTA/STOCKS/MERGE_STOCKS', data: arg }
*/