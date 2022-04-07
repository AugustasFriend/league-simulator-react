import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {calcResults} from '../../Actions/Actions';
import {calcPoints} from '../../Actions/Actions';
import {concludeMatch} from '../../Actions/Actions';
import RoundRobinFormat from './RoundRobinFormat';
import styles from './styles';

const images = [
  require('../../Images/abersinnfv-logo.png'),
  require('../../Images/dijleon-big-logo.png'),
  require('../../Images/kveciai-logo.png'),
  require('../../Images/sanvisenze-logo.png'),
  require('../../Images/atleticoledilla-logo.png'),
  require('../../Images/newfordcity-logo.png'),
  require('../../Images/grezztalo-logo.png'),
  require('../../Images/hunedatku-logo.png'),
  require('../../Images/syktva-logo.png'),
  require('../../Images/trikadona-logo.png'),
];

const Home = ({
  teams,
  currentRound,
  currentMatch,
  calcResults,
  calcPoints,
  concludeMatch,
}) => {
  const teamOne = teams.find(
    team => team.id === RoundRobinFormat(currentRound, currentMatch)[0],
  );
  const teamTwo = teams.find(
    team => team.id === RoundRobinFormat(currentRound, currentMatch)[1],
  );
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <View style={styles.bigtext}>
          <Text style={styles.bigtext}>Upcoming Match:</Text>
        </View>
        <View style={styles.HomeViewTeamContainer}>
          <View style={styles.teamView}>
            <Image source={images[teamOne.bigIconIndex]} />
            <Text style={styles.teamOneText}>
              {teamOne.wins} - {teamOne.draws} - {teamOne.losses}
            </Text>
          </View>
          <View>
            <Text style={styles.dash}>-</Text>
          </View>
          <View style={styles.teamView}>
            <Image source={images[teamTwo.bigIconIndex]} />
            <Text style={styles.teamTwoText}>
              {teamTwo.wins} - {teamTwo.draws} - {teamTwo.losses}
            </Text>
          </View>
        </View>
        <View style={styles.HomeViewTeamContainer}>
          <TouchableOpacity
            style={styles.watchButton}
            onPress={() => {
              calcResults(teamOne, teamTwo), calcPoints(), concludeMatch();
            }}>
            <Text style={styles.watchButtonText}>Watch!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    teams: state.teamReducer.teams,
    currentRound: state.scheduleReducer.currentRound,
    currentMatch: state.scheduleReducer.currentMatch,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    calcResults: (teamOne, teamTwo) => dispatch(calcResults(teamOne, teamTwo)),
    calcPoints: () => dispatch(calcPoints()),
    concludeMatch: () => dispatch(concludeMatch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

/* FLEXDIRECTION FLEXBOT*/
// tsc filename.tsx
// <Text style={styles.dash}>-</Text>
