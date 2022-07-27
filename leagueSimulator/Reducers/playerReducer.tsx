import * as actionTypes from '../Constants';

const initialState = {
  Players: [
    {
      name: 'Cristiano Ronaldo',
      nameAbb: 'C. Ronaldo',
      defSkill: 4,
      midSkill: 7,
      atkSkill: 10,
      teamless: true,
    },
    {
      name: 'Richard Papillon',
      nameAbb: 'Shox',
      defSkill: 5,
      midSkill: 9,
      atkSkill: 7,
      teamless: true,
    },
    {
      name: 'Augustas Eidikis',
      nameAbb: 'A. Eidikis',
      defSkill: 3,
      midSkill: 8,
      atkSkill: 9,
      teamless: true,
    },
    {
      name: 'Luka Perković',
      nameAbb: 'Perkz',
      defSkill: 6,
      midSkill: 6,
      atkSkill: 8,
      teamless: true,
    },
    {
      name: 'Oleksandr Kostyliev',
      nameAbb: 'S1mple',
      defSkill: 5,
      midSkill: 5,
      atkSkill: 10,
      teamless: true,
    },
    {
      name: 'Ilya Zalutskiy',
      nameAbb: 'Perfecto',
      defSkill: 8,
      midSkill: 6,
      atkSkill: 4,
      teamless: true,
    },
    {
      name: 'Nikola Kovač',
      nameAbb: 'NiKo',
      defSkill: 5,
      midSkill: 7,
      atkSkill: 7,
      teamless: true,
    },
    {
      name: 'Ludvig Brolin',
      nameAbb: 'Brollan',
      defSkill: 2,
      midSkill: 6,
      atkSkill: 9,
      teamless: true,
    },
    {
      name: 'Henrik Hansen',
      nameAbb: 'Froggen',
      defSkill: 5,
      midSkill: 8,
      atkSkill: 5,
      teamless: true,
    },
    {
      name: 'Barney Morris',
      nameAbb: 'Alphari',
      defSkill: 4,
      midSkill: 9,
      atkSkill: 3,
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
