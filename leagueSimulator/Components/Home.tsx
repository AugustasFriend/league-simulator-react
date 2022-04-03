import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {addVictory} from '../Actions/Actions';

const images = [
  require('../Images/abersinnfv-logo.png'),
  require('../Images/dijleon-big-logo.png'),
  require('../Images/kveciai-logo.png'),
  require('../Images/sanvisenze-logo.png'),
  require('../Images/atleticoledilla-logo.png'),
  require('../Images/newfordcity-logo.png'),
  require('../Images/grezztalo-logo.png'),
  require('../Images/hunedatku-logo.png'),
  require('../Images/syktva-logo.png'),
  require('../Images/trikadona-logo.png'),
];

function findFirstTeam(currentRound: number, currentMatch: number): number{
  if (currentRound == 1){
    if (currentMatch == 1){
      return 1;
    } else if (currentMatch == 2) {
      return 2;
    } else if (currentMatch == 3) {
      return 3;
    } else if (currentMatch == 4) {
      return 4;
    } else if (currentMatch == 5) {
      return 5;
    }
  }
  return 10;
}

const Home = ({teams, currentRound, currentMatch}) => {
  const teamOne = teams.find(
    team => team.id === findFirstTeam(currentRound, currentMatch),
  );
  const teamTwo = teams.find(team => team.id === currentMatch);
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
          <TouchableOpacity style={styles.watchButton}>
            <Text style={styles.watchButtonText}>Watch!</Text>
          </TouchableOpacity>
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
  bigtext: {
    fontSize: 30,
    fontFamily: 'Montserrat',
    color: 'white',
    alignSelf: 'center',
    marginTop: '20%',
  },
  dash: {
    fontSize: 100,
  },
  teamView: {
    alignItems: 'center', //Centered vertically
    flex: 1,
  },
  teamOneText: {
    fontSize: 30,
    color: 'white',
    marginTop: '5%',
  },
  teamTwoText: {
    fontSize: 30,
    color: 'white',
    marginTop: '5%',
  },
  HomeViewTeamContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '10%',
  },
  watchButton: {
    width: 200,
    height: 60,
    backgroundColor: '#333333',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  watchButtonText: {
    textAlign: 'center',
    paddingTop: '4%',
    color: 'white',
    fontSize: 30,
  },
});

const mapStateToProps = state => {
  return {
    teams: state.teamReducer.teams,
    currentRound: state.teamReducer.currentRound,
    currentMatch: state.teamReducer.currentMatch,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addVictory: () => dispatch(addVictory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

/* FLEXDIRECTION FLEXBOT*/
// tsc filename.tsx
// <Text style={styles.dash}>-</Text>
