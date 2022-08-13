import React from 'react';
import {Text} from 'react-native-paper';

const BracketStandings = ({bool}) => {
  if (!bool) {
    return (
      <>
        <Text>The Bracket Goes Here!</Text>
      </>
    );
  }
  return null;
};

export default BracketStandings;
