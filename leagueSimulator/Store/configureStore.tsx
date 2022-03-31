import {createStore, combineReducers} from 'redux';

import teamReducer from '../Reducers/teamReducer';

const rootReducer = combineReducers({wins: teamReducer});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
