import { ADD_VICTORY } from "../Constants";

const initialState = {
    wins : 0
};

const winReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_VICTORY:
            return{
                ...state,
                wins: action.payload
            };
        default:
            return state;
    }
}

export default winReducer;