 // import redux store
 import getStore from './getStore';

//  // import actions
import { saveAnswer, finishExam } from './actions'
 
//  // import constants
import {SAVE_ANSWER, FINISH_EXAM} from './actions';

const actionsSet = {
	question: {
		saveAnswer
	},
	exam: {
		finishExam
	}
};

// this expression takes the above actionsSet object
// and creates a new object which has the same structure
// but 'wraps' the action creator with a function that also does dispatch
const actions = Object.keys(actionsSet).reduce((p1, namespace) => {
	p1[namespace] = Object.keys(actionsSet[namespace]).reduce((p2, action) => {

		p2[action] = function() {
			const action = actionsSet[namespace][action].apply(null, arguments);  // calls action creator
			store.dispatch(action);  // dispatches action.
			return action;
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