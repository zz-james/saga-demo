 // import redux store
 import {getStore} from './getStore.js';


// import actions and constants
import { saveAnswer, SAVE_ANSWER } from './question/actions.js'
import { finishExam, FINISH_EXAM } from './exam/actions.js'
import { init, apply_filter, mergeFilters } from './filter/actions.js'


const actionsSet = {
	question: {
		saveAnswer
	},
	exam: {
		finishExam
	},
	filters: {
		mergeFilters
	}
};

// this expression takes the above actionsSet object
// and creates a new object which has the same structure
// but 'wraps' the action creator with a function that also does dispatch
const actions = Object.keys(actionsSet).reduce((p1, domain) => {
	p1[domain] = Object.keys(actionsSet[domain]).reduce((p2, action) => {
		p2[action] = function() {
			const actionToDispatch = actionsSet[domain][action].apply(null, arguments);
			store.dispatch(actionToDispatch);
			return actionToDispatch;
		};
		return p2;
	}, {});
	return p1;
}, {});

console.log(actions);
debugger;


const store = getStore();

const constants = {
  SAVE_ANSWER, 
  FINISH_EXAM
};

const subscribe = store.subscribe;

const getState = store.getState;

export default {
	getState,
	actions,
	constants,
	subscribe
};

export {
	getState,
	actions,
	constants,
	subscribe
};