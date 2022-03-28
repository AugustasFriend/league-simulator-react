import { ADD_VICTORY } from "../Constants";

export function addVictory(wins){
    return{
        type: ADD_VICTORY,
        payload: wins
    }
}