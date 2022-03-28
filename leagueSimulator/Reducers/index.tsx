import winReducer from './winReducer';
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    winReducer : winReducer
});

export default allReducers