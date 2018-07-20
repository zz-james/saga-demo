
1. modularised the internals of the redux container by sub-state.

each module consists of 
  identity.js = a string constant which is the module name used in deltas/signals/reducers
  signals.js = actions that are inputs to sagas
  deltas.js = actions that are outputs of sagas and inputs to reducers
  reducer.js
  sagas.js
  sagas folder = exports all the sagas in the sagas folder, these are then imported into index.js
  index.js = an interface (see below)

index.js exports (for consumption by React or whatever front-end lib):
  all the signals
  all the sagas
  the reducer

  as an object with keys

  {signals, sagas, reducer}


signal and delta type actions are used to seperate events at the begining and end of saga based business logic 'pipes' 

signal actions are objects consist of 3 sub actions.

  - REQUEST = any signal triggered by the ui
  - SUCCESS = an signal triggered on success of an api call 
  - FAILURE = an signal triggered on fail of an api call

deltas are very much like the regular actions we know and love