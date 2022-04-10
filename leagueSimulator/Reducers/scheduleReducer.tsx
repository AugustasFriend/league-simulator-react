import * as actionTypes from '../Constants';

const initialState = {
  currentRound: 1,
  currentMatch: 1,
  split: 1,
  playoffs: false,
};

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CONCLUDE_MATCH:
      if (state.currentMatch < 5) {
        return {...state, currentMatch: state.currentMatch + 1};
      } else if (
        state.currentRound == 9 &&
        state.split == 1 &&
        state.currentMatch == 5
      ) {
        return {
          ...state,
          split: 2,
          currentRound: 1,
          currentMatch: 1,
        };
      } else if (
        state.split == 2 &&
        state.currentRound == 9 &&
        state.currentMatch == 5
      ) {
        return {
          ...state,
          playoffs: true,
        };
      } else {
        return {
          ...state,
          currentMatch: 1,
          currentRound: state.currentRound + 1,
        };
      }
    default:
      return state;
  }
};

export default scheduleReducer;
