import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import {connect} from 'react-redux';
import {addVictory} from '../Actions/Actions';
import {bindActionCreators} from 'redux';

function compare(teamA, teamB) {
  if (teamA.wins > teamB.wins) {
    return -1;
  }
  if (teamA.wins < teamB.wins) {
    return 1;
  }
  return 0;
}

const LeagueStandings = ({teams}) => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <View>
          {teams.sort(compare).map(team => (
            <Text>{team.name}</Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#433F3F',
    flex: 1,
  },
  teamView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '10%',
  },
});

const mapStateToProps = state => {
  return {
    wins: state.teamReducer.wins,
    teams: state.teamReducer.teams,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addVictory: () => dispatch(addVictory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeagueStandings);
