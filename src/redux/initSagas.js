  // import sagas
import {sagas as questionSagas} from './question'
import {sagas as examSagas} from './exam'


const sagas = [
  questionSagas,
  examSagas
]

export const initSagas = (sagaMiddleware) => {
  sagas.forEach(
    (sagaSet) => {
      Object.keys(sagaSet).forEach(
        (name) => sagaMiddleware.run.bind(sagaMiddleware)(sagaSet[name])
      )      
    }
  )
}