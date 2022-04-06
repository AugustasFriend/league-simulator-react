import * as actionTypes from '../Constants';

const initialState = {
  currentRound: 1,
  currentMatch: 1,
};

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CONCLUDE_MATCH:
      if (state.currentMatch < 5) {
        return {...state, currentMatch: state.currentMatch + 1};
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
