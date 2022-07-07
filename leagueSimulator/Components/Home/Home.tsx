import React, {useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, Modal} from 'react-native';
import {connect} from 'react-redux';
import {calcResults} from '../../Actions/Actions';
import {calcPoints} from '../../Actions/Actions';
import {concludeMatch} from '../../Actions/Actions';
import {addMatchToHistory} from '../../Actions/Actions';
import {loadPlayersToTeams} from '../../Actions/Actions';
import MatchResults from '../MatchResults/MatchResults';
import FillTeamsButton from './FillTeamsButton';
import RoundRobinFormat from './RoundRobinFormat';
import styles from './styles';
import TeamInfo from './TeamInfo';

const Home = ({
  teams,
  currentRound,
  currentMatch,
  playoffs,
  calcResults,
  calcPoints,
  concludeMatch,
  addMatchToHistory,
  loadPlayersToTeams,
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed');
        }}>
        <View style={styles.transparentModal}>
          <View style={styles.modalView}>
            <MatchResults />
            <View style={styles.backButtonView}>
              <TouchableOpacity
                style={styles.watchButton}
                onPress={() => {
                  setModalVisible(!modalVisible),
                    concludeMatch(),
                    addMatchToHistory(
                      teamOne,
                      teamTwo,
                      teamOne.recentOutcome == 0
                        ? 0
                        : teamOne.recentOutcome == 1
                        ? 1
                        : -1,
                    ),
                    loadPlayersToTeams();
                }}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.MainHomeContainer}>
        <View style={styles.bigtext}>
          <Text style={styles.bigtext}>Upcoming Match:</Text>
        </View>
        <View style={styles.HomeViewTeamContainer}>
          <TeamInfo team={teamOne} />
          <View>
            <Text style={styles.dash}>-</Text>
          </View>
          <TeamInfo team={teamTwo} />
        </View>
        <View style={styles.HomeViewButtonContainer}>
          {!playoffs && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                calcResults(teamOne, teamTwo),
                  calcPoints(),
                  setModalVisible(!modalVisible);
              }}>
              <Text style={styles.buttonText}>Watch!</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
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
    loadPlayersToTeams: () => dispatch(loadPlayersToTeams()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

/* FLEXDIRECTION FLEXBOT*/
// tsc filename.tsx
// <Text style={styles.dash}>-</Text>
