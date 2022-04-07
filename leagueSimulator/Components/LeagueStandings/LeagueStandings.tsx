import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';

function compare(teamA: {points: number}, teamB: {points: number}) {
  if (teamA.points > teamB.points) {
    return -1;
  }
  if (teamA.points < teamB.points) {
    return 1;
  }
  return 0;
}

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

const LeagueStandings = ({teams}) => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.LeagueTextContainer}>
          <Text style={styles.titleText}>League</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BracketTextContainer}>
          <Text style={styles.titleText}>Final Bracket</Text>
        </TouchableOpacity>
      </View>
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
                  {team.wins} {team.draws} {team.losses} {team.points}
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
