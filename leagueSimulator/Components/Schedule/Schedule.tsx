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

const Schedule = ({week}: number, {match}: number) => {
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    week: state.scheduleReducer.currentRound,
    match: state.scheduleReducer.currentMatch,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
