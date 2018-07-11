OK, so this is a pretty minimal example.

only using: babel, webpack, immutable, redux and redux-saga from npm

there are 2 sagas
  saveAnswerSaga
  finishExamSaga

save answer saga listens for a SAVE_ANSWER action then increments a shared 'number of save answers pending' counter.
then delay is used to simulate a connection to the API, after 10 seconds the promise resolves.
then save answer saga decrements the 'number of save answers pending' counter.

finish exam saga listens for a FINISH_EXAN action, if there is any save answers pending (indicated by 'number of save answers pending' counter > 0)
then it yields to a delay of 1 second and then checks again.
if save answer saga has decremented the counter back to zero then the saga proceeds to do whatever it needs to do to finish the exam.

so this doesn't completely work up to what we need, because really we should stop listening for any more 'SAVE_ANSWER' actions once we've got a 'FINISH_EXAM' action, and this can probably be done by breaking the sagas into smaller units and using the 'spawn' and 'cancel' effects 

so would be good to:
a) have more fine grained saga/process control
b) error handling
c) tests

but it is a start.


