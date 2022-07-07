import {createStore, combineReducers} from 'redux';
import teamReducer from '../Reducers/teamReducer';
import playerReducer from '../Reducers/playerReducer';
import scheduleReducer from '../Reducers/scheduleReducer';

const rootReducer = combineReducers({
  teamReducer,
  playerReducer,
  scheduleReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;