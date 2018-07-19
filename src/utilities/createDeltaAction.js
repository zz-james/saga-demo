export const createDeltaAction = function(reducerName, base) {
  return `DELTA/${reducerName}/${base}`;
};