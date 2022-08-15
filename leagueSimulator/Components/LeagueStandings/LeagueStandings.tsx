import React, {useState} from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import styles from './styles';
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

const LeagueStandings = ({teams, bool}) => {
  if (bool) {
    return (
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
    );
  }
  return null;
};

export default LeagueStandings
