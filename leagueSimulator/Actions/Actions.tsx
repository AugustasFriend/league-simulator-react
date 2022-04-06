import * as actionTypes from '../Constants';

export const changeMatch = () => {
  return {
    type: actionTypes.CHANGE_MATCH,
  }
}

export const changeRound = () => {
  return {
    type: actionTypes.CHANGE_ROUND,
  }
}

export const calcResults = (teamOne, teamTwo) => {
  return {
    type: actionTypes.CALC_RESULTS,
    payload: {
      teamOne: teamOne,
      teamTwo: teamTwo,
    }
  }
}

export const calcPoints = () => {
  return {
    type: actionTypes.CALC_POINTS,
  }
}