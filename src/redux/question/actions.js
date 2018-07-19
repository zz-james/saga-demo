import { createActionCreator } from '../../utilities'

export const SAVE_ANSWER = "SAVE_ANSWER";
export const saveAnswer = createActionCreator(SAVE_ANSWER);