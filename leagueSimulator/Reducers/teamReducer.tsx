import {each} from 'immer/dist/internal';
import {AppState} from 'react-native';
import * as actionTypes from '../Constants';
import configureStore from '../Store/configureStore';

const initialState = {
  teamsFilled: false,
  teamOneScore: 0,
  teamTwoScore: 0,
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
      matchHistory: [],
      recentOutcome: 0,
      players: [],
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
      matchHistory: [],
      recentOutcome: 0,
      players: [],
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
      matchHistory: [],
      recentOutcome: 0,
      players: [],
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
      matchHistory: [],
      recentOutcome: 0,
      players: [],
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
      matchHistory: [],
      recentOutcome: 0,
      players: [],
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
      matchHistory: [],
      recentOutcome: 0,
      players: [],
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
      matchHistory: [],
      recentOutcome: 0,
      players: [],
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
      matchHistory: [],
      recentOutcome: 0,
      players: [],
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
      matchHistory: [],
      recentOutcome: 0,
      players: [],
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
      matchHistory: [],
      recentOutcome: 0,
      players: [],
    },
  ],
};

const teamReducer = (state = initialState, action) => {
  function calcTeamDef(team) {
    var defScore = 0;
    for (var i = 0; i < 5; i++) {
      defScore += team.players[i].defSkill;
    }
    defScore = defScore / 5;
    return Math.floor(Math.random() * defScore);
  }

  function calcTeamMid(team) {
    var midScore = 0;
    for (var i = 0; i < 5; i++) {
      midScore += team.players[i].midSkill;
    }
    midScore = midScore / 5;
    return Math.floor(Math.random() * midScore);
  }

  function calcTeamAtk(team) {
    var AtkScore = 0;
    for (var i = 0; i < 5; i++) {
      AtkScore += team.players[i].atkSkill;
    }
    AtkScore = AtkScore / 5;
    return Math.floor(Math.random() * AtkScore);
  }

  function compareScores(calcTeamOne, calcTeamTwo) {
    return calcTeamOne > calcTeamTwo ? 1 : calcTeamOne == calcTeamTwo ? 0 : -1;
  }

  switch (action.type) {
    case actionTypes.CALC_RESULTS:
      var teamOneAdvantages = 0;
      var teamTwoAdvantages = 0;
      if (
        compareScores(
          calcTeamDef(action.payload.teamOne),
          calcTeamDef(action.payload.teamTwo),
        ) == 1
      ) {
        teamOneAdvantages++;
      } else if (
        compareScores(
          calcTeamDef(action.payload.teamOne),
          calcTeamDef(action.payload.teamTwo),
        ) == -1
      ) {
        teamTwoAdvantages++;
      }

      if (
        compareScores(
          calcTeamMid(action.payload.teamOne),
          calcTeamMid(action.payload.teamTwo),
        ) == 1
      ) {
        teamOneAdvantages++;
      } else if (
        compareScores(
          calcTeamMid(action.payload.teamOne),
          calcTeamMid(action.payload.teamTwo),
        ) == -1
      ) {
        teamTwoAdvantages++;
      }

      if (
        compareScores(
          calcTeamAtk(action.payload.teamOne),
          calcTeamAtk(action.payload.teamTwo),
        ) == 1
      ) {
        teamOneAdvantages++;
      } else if (
        compareScores(
          calcTeamAtk(action.payload.teamOne),
          calcTeamAtk(action.payload.teamTwo),
        ) == -1
      ) {
        teamTwoAdvantages++;
      }
      console.log(teamOneAdvantages + ' ' + teamTwoAdvantages);
      if (teamOneAdvantages > teamTwoAdvantages) {
        return {
          ...state,
          teamOneScore: teamOneAdvantages,
          teamTwoScore: teamTwoAdvantages,
          teams: state.teams.map(team =>
            team.id == action.payload.teamOne.id
              ? {...team, wins: team.wins + 1, recentOutcome: 1}
              : team.id == action.payload.teamTwo.id
              ? {...team, losses: team.losses + 1, recentOutcome: -1}
              : team,
          ),
        };
      } else if (teamTwoAdvantages > teamOneAdvantages) {
        return {
          ...state,
          teamOneScore: teamOneAdvantages,
          teamTwoScore: teamTwoAdvantages,
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
          teamOneScore: teamOneAdvantages,
          teamTwoScore: teamTwoAdvantages,
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
            ? team
            : {...team, points: team.wins * 3 + team.draws},
        ),
      };
    case actionTypes.ADD_MATCH_TO_HISTORY:
      if (action.payload.results == 0) {
        return {
          ...state,
          teams: state.teams.map(team =>
            team.id == action.payload.teamOne.id
              ? {
                  ...team,
                  matchHistory: [
                    ...team.matchHistory,
                    [action.payload.teamTwo.name, '0'],
                  ],
                }
              : team.id == action.payload.teamTwo.id
              ? {
                  ...team,
                  matchHistory: [
                    ...team.matchHistory,
                    [action.payload.teamOne.name, '0'],
                  ],
                }
              : team,
          ),
        };
      } else if (action.payload.results == 1) {
        return {
          ...state,
          teams: state.teams.map(team =>
            team.id == action.payload.teamOne.id
              ? {
                  ...team,
                  matchHistory: [
                    ...team.matchHistory,
                    [action.payload.teamTwo.name, '1'],
                  ],
                }
              : team.id == action.payload.teamTwo.id
              ? {
                  ...team,
                  matchHistory: [
                    ...team.matchHistory,
                    [action.payload.teamOne.name, '-1'],
                  ],
                }
              : team,
          ),
        };
      } else {
        return {
          ...state,
          teams: state.teams.map(team =>
            team.id == action.payload.teamOne.id
              ? {
                  ...team,
                  matchHistory: [
                    ...team.matchHistory,
                    [action.payload.teamTwo.name, '-1'],
                  ],
                }
              : team.id == action.payload.teamTwo.id
              ? {
                  ...team,
                  matchHistory: [
                    ...team.matchHistory,
                    [action.payload.teamOne.name, '1'],
                  ],
                }
              : team,
          ),
        };
      }
    case actionTypes.LOAD_PLAYERS_TO_TEAMS:
      const store = configureStore();
      const players = store.getState().playerReducer.Players;
      shuffle(players);
      var counter = 0;
      function getFivePlayers() {
        const countCopy = counter;
        counter = counter + 5;
        return [
          players[countCopy],
          players[countCopy + 1],
          players[countCopy + 2],
          players[countCopy + 3],
          players[countCopy + 4],
        ];
      }
      function shuffle(array) {
        let currentIndex = array.length,
          randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
          ];
        }

        return array;
      }
      return {
        ...state,
        teamsFilled: true,
        teams: state.teams.map(team =>
          team.players.length !== 5
            ? {
                ...team,
                players: getFivePlayers(),
              }
            : team,
        ),
      };
    //teams: state.teams.map(team =>
    //team.players.length !== 5 ? {team, players: getFivePlayers()} : team,
    //),
    default:
      return state;
  }
};
export default teamReducer;
