import { makeActionCreator } from '../utilities'

export const SAVE_ANSWER = "SAVE_ANSWER";
export const saveAnswer = makeActionCreator(SAVE_ANSWER);