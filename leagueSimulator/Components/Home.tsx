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
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <View>
          <Text style={styles.bigtext}>Upcoming Match:</Text>
        </View>
        <View style={styles.nextMatchContainer}>
          {teams
            .filter(team => team.nameAbb === 'AFV')
            .map(team => (
              <Image source={images[team.bigIconIndex]} />
            ))}
          <Text style={styles.dash}>-</Text>
          {teams
            .filter(team => team.nameAbb === 'DJL')
            .map(team => (
              <Image source={images[team.bigIconIndex]} />
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
  bigtext: {
    fontSize: 30,
    fontFamily: 'Montserrat',
    color: 'white',
    alignSelf: 'center',
    marginTop: '20%',
  },
  nextMatchContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '10%',
  },
  dash: {
    fontSize: 100,
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

/* FLEXDIRECTION FLEXBOT*/
// tsc filename.tsx
