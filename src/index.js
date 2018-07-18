// import the state project
import { getState, actions, subscribe } from './redux/index.js';

// import view
//import { render } from 'my-entire-view';

// import selectors
// import { selectors } from 'selectors';

console.log(actions);

actions.question.saveAnswer();
actions.exam.finishExam();



// // get dom element to render ui in
// const domElement = document.getElementById('app');

// // render full app
// render(selectors, domElement);