import {createActionCreator} from './createActionCreator'

export const createSignalAction = function(reducerName, base) {
  return ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((prev, curr, index) => {
    prev[curr] = `SIGNAL/${reducerName}/${base}/${curr}`;
    prev[curr.toLowerCase()] = createActionCreator(prev[curr]);
    return prev;
  }, {})
};