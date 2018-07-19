import {makeActionCreator} from './makeActionCreator'

export const createSignalAction = function(reducerName, base) {
  return ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((prev, curr, index) => {
    prev[curr] = `SIGNAL/${reducerName}/${base}/${curr}`;
    prev[curr.toLowerCase()] = makeActionCreator(prev[curr]);
    return prev;
  }, {})
};