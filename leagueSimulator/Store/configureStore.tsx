import {createStore, combineReducers} from 'redux';
import teamReducer from '../Reducers/teamReducer';
import playerReducer from '../Reducers/playerReducer';
import scheduleReducer from '../Reducers/scheduleReducer';

const rootReducer = combineReducers({
  teamReducer,
  playerReducer,
  scheduleReducer,
});

const store = () => {
  return createStore(rootReducer);
};

export default store;