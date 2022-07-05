import React, {useState} from 'react';
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
import {calcResults} from '../../Actions/Actions';
import {calcPoints} from '../../Actions/Actions';
import {concludeMatch} from '../../Actions/Actions';
import {addMatchToHistory} from '../../Actions/Actions';
import MatchResults from '../MatchResults/MatchResults';
import RoundRobinFormat from './RoundRobinFormat';
import styles from './styles';

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
                    );
                }}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <View style={styles.bigtext}>
          <Text style={styles.bigtext}>Upcoming Match:</Text>
        </View>
        <View style={styles.HomeViewTeamContainer}>
          <View style={styles.teamView}>
            <Image source={images[teamOne.bigIconIndex]} />
            <Text style={styles.teamOneText}>
              {teamOne.wins}W - {teamOne.draws}D - {teamOne.losses}L
            </Text>
          </View>
          <View>
            <Text style={styles.dash}>-</Text>
          </View>
          <View style={styles.teamView}>
            <Image source={images[teamTwo.bigIconIndex]} />
            <Text style={styles.teamTwoText}>
              {teamTwo.wins}W - {teamTwo.draws}D - {teamTwo.losses}L
            </Text>
          </View>
        </View>
        <View style={styles.HomeViewTeamContainer}>
          {!playoffs && (
            <TouchableOpacity
              style={styles.watchButton}
              onPress={() => {
                calcResults(teamOne, teamTwo),
                  calcPoints(),
                  setModalVisible(!modalVisible);
              }}>
              <Text style={styles.buttonText}>Watch!</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
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
// tsc filename.tsx
// <Text style={styles.dash}>-</Text>
