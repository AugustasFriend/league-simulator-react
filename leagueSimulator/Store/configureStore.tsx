import { createStore, combineReducers } from "redux";

import winReducer from "../Reducers/winReducer";

const rootReducer = combineReducers(
    {wins:winReducer}
);

const configureStore = () =>{
    return createStore(rootReducer);
}

export default configureStore;