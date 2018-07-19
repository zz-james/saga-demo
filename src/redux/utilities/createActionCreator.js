// export const createActionCreator = (type, ...argNames) => {
//     return function(...args) {
//         console.log(args);
//         debugger;
//         let action = { type };
//         argNames.forEach((arg, index) => {
//             action[argNames[index]] = args[index]
//         });
//         console.log(action);
//         debugger;
//         return action
//     }
// };

export const createActionCreator = function(action) {
    return function(arg) {
        return {
            type: action,
            data: arg,
        }
    }
}