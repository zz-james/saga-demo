// import the state project
import { getState, signals, subscribe } from './redux';

// import view
//import { render } from 'my-entire-view';

// import selectors
// import { selectors } from 'selectors';



signals.filter.APPLY_FILTER('this is a test');
signals.question.SAVE_ANSWER();
signals.exam.FINISH_EXAM('end this now');

// // get dom element to render ui in
// const domElement = document.getElementById('app');

// // render full app
// render(selectors, domElement);