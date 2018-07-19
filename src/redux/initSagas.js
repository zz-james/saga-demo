  // import sagas
import {sagas as questionSagas} from './question'
import {sagas as examSagas} from './exam'
import {sagas as filterSagas} from './filter'


const sagas = [
  questionSagas,
  examSagas,
  filterSagas
]

export const initSagas = (sagaMiddleware) => {
  sagas.forEach(
    (sagaSet) => {
      Object.keys(sagaSet).forEach(
        (name) => {
          sagaMiddleware.run.bind(sagaMiddleware)(sagaSet[name]);
        }
      )      
    }
  )
}