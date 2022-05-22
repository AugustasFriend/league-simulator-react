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
import RoundRobinchedule from './RoundRobinSchedule';

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

const Schedule = ({week, match, teams}) => {
  const matchups = [
    teams.find(team => team.id == 1),
    teams.find(team => team.id == 2),
  ];

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.weekView}>
        <Text style={styles.weekTextSide}>Week {week - 1}</Text>
        <Text style={styles.weekTextMiddle}>Week {week}</Text>
        <Text style={styles.weekTextSide}>Week {week + 1}</Text>
      </View>
      <View style={styles.horizontalLine} />
      <ScrollView>
        <View style={styles.matchView}>
          <Text>Match 1</Text>
          <Image source={images[matchups[0].bigIconIndex]} />
          <Image source={images[matchups[1].bigIconIndex]} />
        </View>
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
