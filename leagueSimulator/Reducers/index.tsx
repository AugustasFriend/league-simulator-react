import teamReducer from './teamReducer';
import scheduleReducer from './scheduleReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  teamReducer: teamReducer,
  scheduleReducer: scheduleReducer,
});

export default allReducers;
