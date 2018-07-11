import { getStore } from './getStore'
import { saveAnswer, finishExam } from './actions'

const store = getStore();


store.dispatch(saveAnswer());
store.dispatch(finishExam());