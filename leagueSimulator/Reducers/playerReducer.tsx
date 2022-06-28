import * as actionTypes from '../Constants';

const initialState = {
  Players: [
    {
      name: '1',
      nameAbb: '1',
      defSkill: 1,
      midSkill: 1,
      atkSkill: 1,
      teamless: true,
    },
    {
      name: '2',
      nameAbb: '2',
      defSkill: 1,
      midSkill: 1,
      atkSkill: 1,
      teamless: true,
    },
    {
      name: '3',
      nameAbb: '3',
      defSkill: 1,
      midSkill: 1,
      atkSkill: 1,
      teamless: true,
    },
    {
      name: '4',
      nameAbb: '4',
      defSkill: 1,
      midSkill: 1,
      atkSkill: 1,
      teamless: true,
    },
    {
      name: '5',
      nameAbb: '5',
      defSkill: 1,
      midSkill: 1,
      atkSkill: 1,
      teamless: true,
    },
    {
      name: '6',
      nameAbb: '6',
      defSkill: 1,
      midSkill: 1,
      atkSkill: 1,
      teamless: true,
    },
    {
      name: '7',
      nameAbb: '7',
      defSkill: 1,
      midSkill: 1,
      atkSkill: 1,
      teamless: true,
    },
    {
      name: '8',
      nameAbb: '8',
      defSkill: 1,
      midSkill: 1,
      atkSkill: 1,
      teamless: true,
    },
    {
      name: '9',
      nameAbb: '9',
      defSkill: 1,
      midSkill: 1,
      atkSkill: 1,
      teamless: true,
    },
    {
      name: '10',
      nameAbb: '10',
      defSkill: 1,
      midSkill: 1,
      atkSkill: 1,
      teamless: true,
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
