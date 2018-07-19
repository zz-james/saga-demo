at the moment -> attempting to do something like described on this page:

https://medium.com/@totaldis/redux-saga-in-action-s-f7d11cffa35a

which divides into 2 things:

1. modularise the internals of the redux container by sub-state.

each module consists of 
  signals.js
  deltas.js
  reducer.js
  sagas.js
  sagas folder
  and index.js

saga.js exports all the sagas in the sagas folder, these are then imported into index.js.

index.js exports (for consumption by React or whatever front-end lib):
  all the signals
  all the sagas
  the reducer

as an object with keys

{signals, sagas, reducer}

!!WORK IN PROGRESS!!
2. use signal and delta type actions and action creators to seperate events at the begining and end of saga based business logic 'pipes' 

at the moment I'm only trying to get the APPLY_FILTER request action to work, currently it does get created and the saga picks it up, but I don't think I'm using the best syntax to call it

in src/index.js line 13, 

signals.filter.APPLY_FILTER('request');


not sure if I should just set up 3 string constants or whether they are supposed to be created already and I just don't understand it yet...

also in src/redux/filter/sagas/finishExamSaga.js

I should use the utility function createWatcher() to create the generator but when I do I can't figure out how to export it, so I just (for now) wrote the generator out... 

:-( 



