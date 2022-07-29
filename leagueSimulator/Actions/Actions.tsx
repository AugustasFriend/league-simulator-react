import * as actionTypes from '../Constants';

// ---- Actions for teamReducer ---- //
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

export const loadPlayersToTeams = () => {
  return {
    type: actionTypes.LOAD_PLAYERS_TO_TEAMS,
  }
}



// ---- Actions for scheduleReducer ---- //
export const concludeMatch = () => {
  return {
    type: actionTypes.CONCLUDE_MATCH,
  }
}

export const addMatchToHistory = (teamOne, teamTwo, results) => {
  return {
    type: actionTypes.ADD_MATCH_TO_HISTORY,
    payload: {
      teamOne: teamOne,
      teamTwo: teamTwo,
      results: results,
    }
  }
}



// ---- Actions for playerReducer ---- //