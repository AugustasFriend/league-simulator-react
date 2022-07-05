import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

const matchHistory = ({team}) => {
  return (
    <View>
      {team.matchHistory
        .slice(0)
        .reverse()
        .slice(0, 3)
        .map((match, index) => (
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
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(matchHistory);
