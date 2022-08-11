import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TeamInfo from './TeamInfo';
import styles from './styles';
const WatchButton = ({
  teamOne,
  teamTwo,
  playoffs,
  calcResults,
  calcPoints,
  setModalVisible,
  modalVisible,
}) => {
  return (
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
  );
};

export default WatchButton;
