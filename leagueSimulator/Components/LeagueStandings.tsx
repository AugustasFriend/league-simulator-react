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

function compare(teamA: {wins: number}, teamB: {wins: number}) {
  if (teamA.wins > teamB.wins) {
    return -1;
  }
  if (teamA.wins < teamB.wins) {
    return 1;
  }
  return 0;
}

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

const LeagueStandings = ({teams}) => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <View style={styles.marginTop}>
          {teams.sort(compare).map(team => (
            <View>
              <View style={styles.scoreContainer}>
                <View style={styles.imageSize}>
                  <Image
                    source={images[team.bigIconIndex]}
                    style={styles.imageAdjuster}
                  />
                </View>
                <Text style={styles.nameText}>{team.name}</Text>
                <Text style={styles.nameText}>
                  {team.wins} {team.draws} {team.losses}
                </Text>
              </View>
              <View style={styles.horizontalLine} />
            </View>
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
  marginTop: {
    marginTop: '2%',
  },
  scoreContainer: {
    flexDirection: 'row',
  },
  nameText: {
    fontSize: 25,
    color: 'white',
    textAlignVertical: 'center',
    marginLeft: '2%',
  },
  horizontalLine: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginTop: '2%',
    marginBottom: '2%',
  },
  imageSize: {
    width: 65,
    height: 65,
  },
  imageAdjuster: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    marginLeft: '5%',
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

export default connect(mapStateToProps, mapDispatchToProps)(LeagueStandings);
