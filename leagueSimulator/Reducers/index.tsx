import teamReducer from './teamReducer';
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    teamReducer : teamReducer
});

export default allReducers