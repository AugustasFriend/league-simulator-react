import React from 'react';
import BracketMatch from './BracketMatch';
import {View} from 'react-native';

const BracketStandings = ({bool, teams}) => {
  if (!bool) {
    return (
      <>
        <View style={{margin:'8%'}} />
        <BracketMatch />
        <View style={{margin:'3%'}} />
        <BracketMatch />
        <View style={{margin:'13%'}} />
        <BracketMatch />
        <View style={{margin:'3%'}} />
        <BracketMatch />
      </>
    );
  }
  return null;
};

export default BracketStandings;
