import * as actionTypes from '../Constants';

const initialState = {
  Players: [
    {
      name: 'Cristiano Ronaldo',
      nameAbb: 'C. Ronaldo',
    },
  ],
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default playerReducer;
