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
    if (currentMatch == 1) {
      return [1, 9];
    } else if (currentMatch == 2) {
      return [10, 8];
    } else if (currentMatch == 3) {
      return [2, 7];
    } else if (currentMatch == 4) {
      return [3, 6];
    } else if (currentMatch == 5) {
      return [4, 5];
    }
  } else if (currentRound == 3) {
    if (currentMatch == 1) {
      return [1, 8];
    } else if (currentMatch == 2) {
      return [9, 7];
    } else if (currentMatch == 3) {
      return [10, 6];
    } else if (currentMatch == 4) {
      return [2, 5];
    } else if (currentMatch == 5) {
      return [3, 4];
    }
  } else if (currentRound == 4) {
    if (currentMatch == 1) {
      return [1, 7];
    } else if (currentMatch == 2) {
      return [8, 6];
    } else if (currentMatch == 3) {
      return [9, 5];
    } else if (currentMatch == 4) {
      return [10, 4];
    } else if (currentMatch == 5) {
      return [2, 3];
    }
  } else if (currentRound == 5) {
    if (currentMatch == 1) {
      return [1, 6];
    } else if (currentMatch == 2) {
      return [7, 5];
    } else if (currentMatch == 3) {
      return [8, 4];
    } else if (currentMatch == 4) {
      return [9, 3];
    } else if (currentMatch == 5) {
      return [10, 2];
    }
  } else if (currentRound == 6) {
    if (currentMatch == 1) {
      return [1, 5];
    } else if (currentMatch == 2) {
      return [6, 4];
    } else if (currentMatch == 3) {
      return [7, 3];
    } else if (currentMatch == 4) {
      return [8, 2];
    } else if (currentMatch == 5) {
      return [9, 10];
    }
  } else if (currentRound == 7) {
    if (currentMatch == 1) {
      return [1, 4];
    } else if (currentMatch == 2) {
      return [5, 3];
    } else if (currentMatch == 3) {
      return [6, 2];
    } else if (currentMatch == 4) {
      return [7, 10];
    } else if (currentMatch == 5) {
      return [8, 9];
    }
  } else if (currentRound == 8) {
    if (currentMatch == 1) {
      return [1, 3];
    } else if (currentMatch == 2) {
      return [4, 2];
    } else if (currentMatch == 3) {
      return [5, 10];
    } else if (currentMatch == 4) {
      return [6, 9];
    } else if (currentMatch == 5) {
      return [7, 8];
    }
  } else if (currentRound == 9) {
    if (currentMatch == 1) {
      return [1, 2];
    } else if (currentMatch == 2) {
      return [3, 10];
    } else if (currentMatch == 3) {
      return [4, 9];
    } else if (currentMatch == 4) {
      return [5, 8];
    } else if (currentMatch == 5) {
      return [6, 7];
    }
  }
  return [];
}

export default RoundRobinchedule;
