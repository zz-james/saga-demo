export const createActionCreator = function(action) {
  return function(arg) {
    return {
      type: action,
      data: arg,
    }
  }
}