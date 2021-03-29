import {actionType} from './actionType'

export const addHabit = (data) => {
  return {type: actionType.ADD_HABIT,data};
};
export const action = {
  addHabit
}

