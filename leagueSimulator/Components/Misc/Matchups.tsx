import React from "react";

const Matchups = [
  [
    teams.find(team => team.id === RoundRobinSchedule(week, match)[0][0]),
    teams.find(team => team.id === RoundRobinSchedule(week, match)[0][1]),
  ],
  [
    teams.find(team => team.id === RoundRobinSchedule(week, match)[1][0]),
    teams.find(team => team.id === RoundRobinSchedule(week, match)[1][1]),
  ],
  [
    teams.find(team => team.id === RoundRobinSchedule(week, match)[2][0]),
    teams.find(team => team.id === RoundRobinSchedule(week, match)[2][1]),
  ],
  [
    teams.find(team => team.id === RoundRobinSchedule(week, match)[3][0]),
    teams.find(team => team.id === RoundRobinSchedule(week, match)[3][1]),
  ],
  [
    teams.find(team => team.id === RoundRobinSchedule(week, match)[4][0]),
    teams.find(team => team.id === RoundRobinSchedule(week, match)[4][1]),
  ],
];

export default Matchups;
