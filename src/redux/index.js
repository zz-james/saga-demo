 // import redux store
 import {getStore} from './getStore.js';


// import actions and constants
import { saveAnswer, SAVE_ANSWER } from './question/signals.js'
import { finishExam, FINISH_EXAM } from './exam/signals.js'
// NOTE: COMMENTED OUT BECAUSE THEY ARE NOT PROPER SIGNAL ACTIONS YET.
import { APPLY_FILTER } from './filter/signals.js'


const signalSet = {
	// question: {
	// 	saveAnswer
	// },
	// exam: {
	// 	finishExam
	// },
	filter: {
		APPLY_FILTER
	}
};




// this expression takes the above actionsSet object
// and creates a new object which has the same structure
// but 'wraps' the action creator with a function that also does dispatch
const signals = Object.keys(signalSet).reduce((p1, domain) => {
	p1[domain] = Object.keys(signalSet[domain]).reduce((p2, action) => {
		p2[action] = function(task) {
			const signalToDispatch = signalSet[domain][action][task].apply(null, arguments);
			store.dispatch(signalToDispatch);
			return signalToDispatch;
		};
		return p2;
	}, {});
	return p1;
}, {});


const store = getStore();

const constants = {
  SAVE_ANSWER, 
  FINISH_EXAM
};

const subscribe = store.subscribe;

const getState = store.getState;

export default {
	getState,
	signals,
	constants,
	subscribe
};

export {
	getState,
	signals,
	constants,
	subscribe
};