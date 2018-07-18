import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import { createLogger } from 'redux-logger'
import { Iterable } from 'immutable'
import createSagaMiddleware from 'redux-saga'
import { reducer } from './combineReducers'
import { defaultState } from './defaultState'
import { initSagas } from './initSagas'


const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) return state.toJS();
  else return state;
};

const logger = createLogger({
  stateTransformer,
});


export const getStore = ()=>{
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [sagaMiddleware, logger];
  const composables = [applyMiddleware(...middleWares)]
  const enhancer = compose(
      ... composables
  );
  const store = createStore(
      reducer,
      defaultState,
      enhancer
  );
  console.info("Saga middleware implemented");
  initSagas(sagaMiddleware); // this has to come after the middleware has been applied
  return store;
};