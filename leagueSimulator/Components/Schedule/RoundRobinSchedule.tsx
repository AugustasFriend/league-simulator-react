function RoundRobinSchedule(currentRound: number, currentMatch: number) {
  if (currentRound == 1) {
    return [
      [1, 10],
      [2, 9],
      [3, 8],
      [4, 7],
      [5, 6],
    ];
  } else if (currentRound == 2) {
    return [
      [1, 9],
      [10, 8],
      [2, 7],
      [3, 6],
      [4, 5],
    ];
  } else if (currentRound == 3) {
    return [
      [1, 8],
      [9, 7],
      [10, 6],
      [2, 5],
      [3, 4],
    ];
  } else if (currentRound == 4) {
    return [
      [1, 7],
      [8, 6],
      [9, 5],
      [10, 4],
      [2, 3],
    ];
  } else if (currentRound == 5) {
    return [
      [1, 6],
      [7, 5],
      [8, 4],
      [9, 3],
      [10, 2],
    ];
  } else if (currentRound == 6) {
    return [
      [1, 5],
      [6, 4],
      [7, 3],
      [8, 2],
      [9, 10],
    ];
  } else if (currentRound == 7) {
    return [
      [1, 4],
      [5, 3],
      [6, 2],
      [7, 10],
      [8, 9],
    ];
  } else if (currentRound == 8) {
    return [
      [1, 3],
      [4, 2],
      [5, 10],
      [6, 9],
      [7, 8],
    ];
  } else if (currentRound == 9) {
    return [
      [1, 2],
      [3, 10],
      [4, 9],
      [5, 8],
      [6, 7],
    ];
  }
  return [];
}

export default RoundRobinSchedule;
