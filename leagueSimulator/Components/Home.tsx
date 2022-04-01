import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {addVictory} from '../Actions/Actions';

const images = [
  require('../Images/abersinn-big-logo.png'),
  require('../Images/dijleon-big-logo.png'),
];

const Home = ({teams}) => {
  const teamOne = teams.find(team => team.nameAbb === 'AFV');
  const teamTwo = teams.find(team => team.nameAbb === 'DJL');
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
    flex:1,
  },
  teamOneText: {
    fontSize: 30,
    color: 'white',
    marginRight: '12%',
    marginTop: '5%',
  },
  teamTwoText: {
    fontSize: 30,
    color: 'white',
    marginLeft: '12%',
    marginTop: '5%',
  },
  HomeViewTeamContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '10%',
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

/* FLEXDIRECTION FLEXBOT*/
// tsc filename.tsx
// <Text style={styles.dash}>-</Text>