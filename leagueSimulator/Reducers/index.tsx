import teamReducer from './teamReducer';
import scheduleReducer from './scheduleReducer';
import {combineReducers} from 'redux';
import playerReducer from './playerReducer';

const allReducers = combineReducers({
  teamReducer: teamReducer,
  scheduleReducer: scheduleReducer,
  playerReducer: playerReducer,
});

export default allReducers;
