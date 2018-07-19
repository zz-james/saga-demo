 // import redux store
 import {getStore} from './getStore.js';


// import actions and constants
import { SAVE_ANSWER } from './question/signals.js'
import { FINISH_EXAM } from './exam/signals.js'
import { APPLY_FILTER } from './filter/signals.js'




const signalSet = {
	question: {
		SAVE_ANSWER
	},
	exam: {
		FINISH_EXAM
	},
	filter: {
		APPLY_FILTER
	}
};



// this expression takes the above signalSet object
// and creates a new object which has the same structure
// but 'wraps' the action creator with a function that also does dispatch
const signals = Object.keys(signalSet).reduce((p1, domain) => {
	p1[domain] = Object.keys(signalSet[domain]).reduce((p2, action) => {

		p2[action] = function() {
			const signalToDispatch = signalSet[domain][action].request.apply(null, arguments);
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