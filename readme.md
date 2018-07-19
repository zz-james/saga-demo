2 things

----------------------------- 1 ---------------------------

Following the example on this webpage:
http://www.thinkloop.com/article/extreme-decoupling-react-redux-selectors/

created a redux container which exports a minimal interface of:

{ getState, actions, constants, subscribe };

----------------------------- 2 ------------------------------

attempting to do something like described on this page:

https://medium.com/@totaldis/redux-saga-in-action-s-f7d11cffa35a

which divides further into 2 things:

1. modularise the internals of the redux container by sub-state.

each module consists of 
  actions.js
  reducer.js
  sagas.js
  sagas folder
  and index.js

saga.js exports all the sagas in the sagas folder, these are then imported into index.js.

index.js exports:
  all the actions
  all the sagas
  the reducer

as an object with keys

{actions, sagas, reducer}

In Progress:
2. use signal and delta type actions and action creators to seperate events at the begining and end of saga based business logic 'pipes' 

