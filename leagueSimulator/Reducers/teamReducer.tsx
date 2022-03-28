import * as actionTypes from "../Constants";

const initialState = {
    wins : 0,
    teams:[
        {name: "Abersinn FV",
        nameAbb: "AFV",
        bigIconIndex: 0,
        wins: 1,
        },
        {name: "Dijléon FCO",
        nameAbb: "DJL",
        bigIconIndex: 1,
        wins: 3,
        },
        {name: "Kveciai FC",
        nameAbb: "KVE",
        bigIconIndex: 2,
        wins: 2,
        },
        {name: "San Visenze",
        nameAbb: "SAV",
        bigIconIndex: 3,
        wins: 1,
        },
        {name: "Atlético Ledilla",
        nameAbb: "ATL",
        bigIconIndex: 4,
        wins: 0,
        },
        {name: "Newford City",
        nameAbb: "NFC",
        bigIconIndex: 5,
        wins: 0,
        },
    ]
};

const teamReducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.ADD_VICTORY:
            const updatedWins = state.wins+1;
            TeamData[0].wins = state.wins+1;
            return{
                ...state,
                wins: updatedWins
            };
        default:
            return state;
    }
}

export default teamReducer;