import { makeActionCreator } from '../utilities'

export const FINISH_EXAM = "FINISH_EXAM";
export const finishExam = makeActionCreator(FINISH_EXAM);