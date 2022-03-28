import * as actionTypes from "../Constants";

const initialState = {
    wins : 1
};

const winReducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.ADD_VICTORY:
            const updatedWins = state.wins+1;
            return{
                ...state,
                wins: updatedWins
            };
        default:
            return state;
    }
}

export default winReducer;