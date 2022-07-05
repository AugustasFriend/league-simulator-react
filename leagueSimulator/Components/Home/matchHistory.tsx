import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

const matchHistory = ({team}) => {
  return (
    <View>
      {team.matchHistory.map((match, index) => (
        <Text style={styles.historyText}>
          {match[0]} {match[1] == 1 ? 'W' : match[1] == -1 ? 'L' : 'D'}
        </Text>
      ))}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    teams: state.teamReducer.teams,
    currentRound: state.scheduleReducer.currentRound,
    currentMatch: state.scheduleReducer.currentMatch,
    playoffs: state.scheduleReducer.playoffs,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(matchHistory);
