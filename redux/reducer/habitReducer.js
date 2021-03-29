import _ from 'lodash';
import {actionType} from './actionType'
const habitReducer = (state = { }, action) => {
  switch (action.type) {
    case actionType.ADD_HABIT:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default habitReducer;