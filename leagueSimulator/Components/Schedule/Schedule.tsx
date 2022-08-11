import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View, Image} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import RoundRobinSchedule from './RoundRobinSchedule';
import WeekTab from './WeekTab';
import Images from '../Misc/Images';
import Matchups from '../Misc/Matchups';

const Schedule = ({week, match, teams}) => {
  const matchups = [
    [
      teams.find(team => team.id === RoundRobinSchedule(week, match)[0][0]),
      teams.find(team => team.id === RoundRobinSchedule(week, match)[0][1]),
    ],
    [
      teams.find(team => team.id === RoundRobinSchedule(week, match)[1][0]),
      teams.find(team => team.id === RoundRobinSchedule(week, match)[1][1]),
    ],
    [
      teams.find(team => team.id === RoundRobinSchedule(week, match)[2][0]),
      teams.find(team => team.id === RoundRobinSchedule(week, match)[2][1]),
    ],
    [
      teams.find(team => team.id === RoundRobinSchedule(week, match)[3][0]),
      teams.find(team => team.id === RoundRobinSchedule(week, match)[3][1]),
    ],
    [
      teams.find(team => team.id === RoundRobinSchedule(week, match)[4][0]),
      teams.find(team => team.id === RoundRobinSchedule(week, match)[4][1]),
    ],
  ];

  const [counter, setCount] = useState(0);
  function getMatchNumber(): number {
    setCount(counter + 1);
    return counter;
  }
  return (
    <SafeAreaView style={styles.background}>
      <WeekTab week={week} />
      <View style={styles.horizontalLine} />
      <ScrollView>
        {matchups.map((theMatchups, index) => (
          <View style={styles.matchView}>
            <Text style={styles.matchText}>Match {index + 1}</Text>
            <View style={styles.matchContentView}>
              <View style={styles.imageSize}>
                <Image
                  source={Images[theMatchups[0].bigIconIndex]}
                  style={styles.imageAdjuster}
                />
              </View>
              <Text style={styles.dash}>-</Text>
              <View style={styles.imageSize}>
                <Image
                  source={Images[theMatchups[1].bigIconIndex]}
                  style={styles.imageAdjuster}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    teams: state.teamReducer.teams,
    week: state.scheduleReducer.currentRound,
    match: state.scheduleReducer.currentMatch,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
