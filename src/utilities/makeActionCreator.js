export const makeActionCreator = (type, ...argNames) => {
    return function(...args) {
        let action = { type };
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        });
        return action
    }
};


// export const createActionCreator = function(action) {
//     return function(arg) {
//       return {
//         type: action,
//         data: arg,
//       }
//     }
//   }