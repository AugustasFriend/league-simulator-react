import * as actionTypes from '../Constants';

const initialState = {
  teams: [
    {
      id: 1,
      name: 'Abersinn FV',
      nameAbb: 'AFV',
      bigIconIndex: 0,
      wins: 1,
      losses: 1,
      draws: 0,
      skill: 5,
    },
    {
      id: 2,
      name: 'Dijléon FCO',
      nameAbb: 'DJL',
      bigIconIndex: 1,
      wins: 3,
      losses: 0,
      draws: 0,
      skill: 5,
    },
    {
      id: 3,
      name: 'Kveciai FC',
      nameAbb: 'KVE',
      bigIconIndex: 2,
      wins: 2,
      losses: 4,
      draws: 0,
      skill: 5,
    },
    {
      id: 4,
      name: 'San Visenze',
      nameAbb: 'SAV',
      bigIconIndex: 3,
      wins: 1,
      losses: 3,
      draws: 0,
      skill: 5,
    },
    {
      id: 5,
      name: 'Atlético Ledilla',
      nameAbb: 'ATL',
      bigIconIndex: 4,
      wins: 0,
      losses: 1,
      draws: 0,
      skill: 5,
    },
    {
      id: 6,
      name: 'Newford City',
      nameAbb: 'NFC',
      bigIconIndex: 5,
      wins: 5,
      losses: 2,
      draws: 0,
      skill: 5,
    },
    {
      id: 7,
      name: 'Grezztalo',
      nameAbb: 'GRT',
      bigIconIndex: 6,
      wins: 1,
      losses: 4,
      draws: 1,
      skill: 5,
    },
    {
      id: 8,
      name: 'Hunedatku',
      nameAbb: 'HDK',
      bigIconIndex: 7,
      wins: 6,
      losses: 0,
      draws: 0,
      skill: 5,
    },
    {
      id: 9,
      name: 'FK Syktva',
      nameAbb: 'SFK',
      bigIconIndex: 8,
      wins: 3,
      losses: 3,
      draws: 0,
      skill: 5,
    },
    {
      id: 10,
      name: 'Trikadóna',
      nameAbb: 'TKD',
      bigIconIndex: 9,
      wins: 0,
      losses: 5,
      draws: 2,
      skill: 5,
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
              ? {...team, wins: team.wins + 1}
              : team.id == action.payload.teamTwo.id
              ? {...team, losses: team.losses + 1}
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
              ? {...team, wins: team.wins + 1}
              : team.id == action.payload.teamOne.id
              ? {...team, losses: team.losses + 1}
              : team,
          ),
        };
      } else {
        return {
          ...state,
          teams: state.teams.map(team =>
            team.id == action.payload.teamTwo.id
              ? {...team, draws: team.draws + 1}
              : team.id == action.payload.teamOne.id
              ? {...team, draws: team.draws + 1}
              : team,
          ),
        };
      }
    default:
      return state;
  }
};
export default teamReducer;
