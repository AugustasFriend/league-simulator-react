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
import Images from '../Misc/Images';

function compare(teamA: {points: number}, teamB: {points: number}) {
  if (teamA.points > teamB.points) {
    return -1;
  }
  if (teamA.points < teamB.points) {
    return 1;
  }
  return 0;
}

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
      <ScrollView style={styles.scrollView}>
        {teams.sort(compare).map((team, index) => (
          <View>
            <View style={styles.teamInfoContainer}>
              <Text style={styles.numberText}> {index + 1}</Text>
              <View style={styles.imageSize}>
                <Image
                  source={Images[team.bigIconIndex]}
                  style={styles.imageAdjuster}
                />
              </View>
              <Text style={styles.nameText}>{team.name}</Text>
              <View style={styles.statsContainer}>
                <Text style={styles.statsText}>
                  {team.points}Pts {team.wins}W {team.draws}D {team.losses}L
                </Text>
              </View>
            </View>
            <View style={styles.horizontalLine} />
          </View>
        ))}
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
