import * as actionTypes from '../Constants';
import configureStore from '../Store/configureStore';

const initialState = {
  teams: [
    {
      id: 1,
      name: 'Abersinn FV',
      nameAbb: 'AFV',
      bigIconIndex: 0,
      wins: 0,
      losses: 0,
      draws: 0,
      points: 0,
      skill: 5,
      matchHistory: [{name: 'team', outcome: '1'}],
      recentOutcome: 0,
      players: {},
    },
    {
      id: 2,
      name: 'Dijléon FCO',
      nameAbb: 'DJL',
      bigIconIndex: 1,
      wins: 0,
      losses: 0,
      draws: 0,
      points: 0,
      skill: 5,
      matchHistory: [{name: 'team', outcome: '1'}],
      recentOutcome: 0,
      players: {},
    },
    {
      id: 3,
      name: 'Kveciai FC',
      nameAbb: 'KVE',
      bigIconIndex: 2,
      wins: 0,
      losses: 0,
      draws: 0,
      points: 0,
      skill: 5,
      matchHistory: [{name: 'team', outcome: '1'}],
      recentOutcome: 0,
      players: {},
    },
    {
      id: 4,
      name: 'San Visenze',
      nameAbb: 'SAV',
      bigIconIndex: 3,
      wins: 0,
      losses: 0,
      draws: 0,
      points: 0,
      skill: 5,
      matchHistory: [{name: 'team', outcome: '1'}],
      recentOutcome: 0,
      players: {},
    },
    {
      id: 5,
      name: 'Atlético Ledilla',
      nameAbb: 'ATL',
      bigIconIndex: 4,
      wins: 0,
      losses: 0,
      draws: 0,
      points: 0,
      skill: 5,
      matchHistory: [{name: 'team', outcome: '1'}],
      recentOutcome: 0,
      players: {},
    },
    {
      id: 6,
      name: 'Newford City',
      nameAbb: 'NFC',
      bigIconIndex: 5,
      wins: 0,
      losses: 0,
      draws: 0,
      points: 0,
      skill: 5,
      matchHistory: [{name: 'team', outcome: '1'}],
      recentOutcome: 0,
      players: {},
    },
    {
      id: 7,
      name: 'Grezztalo',
      nameAbb: 'GRT',
      bigIconIndex: 6,
      wins: 0,
      losses: 0,
      draws: 0,
      points: 0,
      skill: 5,
      matchHistory: [{name: 'team', outcome: '1'}],
      recentOutcome: 0,
      players: {},
    },
    {
      id: 8,
      name: 'Hunedatku',
      nameAbb: 'HDK',
      bigIconIndex: 7,
      wins: 0,
      losses: 0,
      draws: 0,
      points: 0,
      skill: 5,
      matchHistory: [{name: 'team', outcome: '1'}],
      recentOutcome: 0,
      players: {},
    },
    {
      id: 9,
      name: 'FK Syktva',
      nameAbb: 'SFK',
      bigIconIndex: 8,
      wins: 0,
      losses: 0,
      draws: 0,
      points: 0,
      skill: 5,
      matchHistory: [{name: 'team', outcome: '1'}],
      recentOutcome: 0,
      players: {},
    },
    {
      id: 10,
      name: 'Trikadóna',
      nameAbb: 'TKD',
      bigIconIndex: 9,
      wins: 0,
      losses: 0,
      draws: 0,
      points: 0,
      skill: 5,
      matchHistory: [{name: 'team', outcome: '1'}],
      recentOutcome: 0,
      players: {},
    },
  ],
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CALC_RESULTS:
      if (
        Math.floor(Math.random() * action.payload.teamOne.skill) >
        Math.floor(Math.random() * action.payload.teamTwo.skill)
      ) {
        return {
          ...state,
          teams: state.teams.map(team =>
            team.id == action.payload.teamOne.id
              ? {...team, wins: team.wins + 1, recentOutcome: 1}
              : team.id == action.payload.teamTwo.id
              ? {...team, losses: team.losses + 1, recentOutcome: -1}
              : team,
          ),
        };
      } else if (
        Math.floor(Math.random() * action.payload.teamOne.skill) <
        Math.floor(Math.random() * action.payload.teamTwo.skill)
      ) {
        return {
          ...state,
          teams: state.teams.map(team =>
            team.id == action.payload.teamTwo.id
              ? {...team, wins: team.wins + 1, recentOutcome: 1}
              : team.id == action.payload.teamOne.id
              ? {...team, losses: team.losses + 1, recentOutcome: -1}
              : team,
          ),
        };
      } else {
        return {
          ...state,
          teams: state.teams.map(team =>
            team.id == action.payload.teamTwo.id
              ? {...team, draws: team.draws + 1, recentOutcome: 0}
              : team.id == action.payload.teamOne.id
              ? {...team, draws: team.draws + 1, recentOutcome: 0}
              : team,
          ),
        };
      }
    case actionTypes.CALC_POINTS:
      return {
        ...state,
        teams: state.teams.map(team =>
          team.name == ''
            ? console.log('ayo')
            : {...team, points: team.wins * 3 + team.draws},
        ),
      };
    case actionTypes.ADD_MATCH_TO_HISTORY:
      console.log(action.payload.teamOne.matchHistory);
      if (action.payload.results == 0) {
        return {
          ...state,
          teams: state.teams.map(team =>
            team.id == action.payload.teamOne.id
              ? {
                  ...team,
                  matchHistory: [
                    ...team.matchHistory,
                    action.payload.teamOne.name,
                  ],
                }
              : team.id == action.payload.teamTwo.id
              ? {
                  ...team,
                  matchHistory: [
                    ...team.matchHistory,
                    action.payload.teamOne.name,
                  ],
                }
              : team,
          ),
        };
      }
      return {...state};
    case actionTypes.LOAD_PLAYERS_TO_TEAMS:
      return {...state};
    //teams: state.teams.map(team => team.players.)};
    default:
      return state;
  }
};
export default teamReducer;
