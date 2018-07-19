export const createDeltaActionType = function(reducerName, base) {
  return `DELTA/${reducerName}/${base}`;
};