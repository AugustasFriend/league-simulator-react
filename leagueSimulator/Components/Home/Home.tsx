import React, {useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, Modal} from 'react-native';
import {connect} from 'react-redux';
import {calcResults} from '../../Actions/Actions';
import {calcPoints} from '../../Actions/Actions';
import {concludeMatch} from '../../Actions/Actions';
import {addMatchToHistory} from '../../Actions/Actions';
import FillTeamsButton from './FillTeamsButton';
import RoundRobinFormat from './RoundRobinFormat';
import styles from './styles';
import WatchButton from './WatchButton';
import BackButton from './BackButton';

const Home = ({
  teams,
  currentRound,
  currentMatch,
  playoffs,
  calcResults,
  calcPoints,
  concludeMatch,
  addMatchToHistory,
}) => {
  const teamOne = teams.find(
    team => team.id === RoundRobinFormat(currentRound, currentMatch)[0],
  );
  const teamTwo = teams.find(
    team => team.id === RoundRobinFormat(currentRound, currentMatch)[1],
  );

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.background}>
      <FillTeamsButton />
      <BackButton
        modalVisible={modalVisible}
        teamOne={teamOne}
        teamTwo={teamTwo}
        setModalVisible={setModalVisible}
        concludeMatch={concludeMatch}
        addMatchToHistory={addMatchToHistory}
      />
      <WatchButton
        teamOne={teamOne}
        teamTwo={teamTwo}
        playoffs={playoffs}
        calcResults={calcResults}
        calcPoints={calcPoints}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
    </SafeAreaView>
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
  return {
    calcResults: (teamOne, teamTwo) => dispatch(calcResults(teamOne, teamTwo)),
    calcPoints: () => dispatch(calcPoints()),
    concludeMatch: () => dispatch(concludeMatch()),
    addMatchToHistory: (teamOne, teamTwo, results) =>
      dispatch(addMatchToHistory(teamOne, teamTwo, results)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

/* FLEXDIRECTION FLEXBOT*/
// tsc filename.tsx  // <Text style={styles.dash}>-</Text>
