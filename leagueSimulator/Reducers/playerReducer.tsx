import * as actionTypes from '../Constants';

const initialState = {
  Players: [
    {
      name: 'Cristiano Ronaldo',
      nameAbb: 'C. Ronaldo',
      defSkill: 1,
      midSkill: 1,
      atkSkill: 1,
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
