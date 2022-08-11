import React from 'react';
import {Modal, View, TouchableOpacity, Text} from 'react-native';
import MatchResults from '../MatchResults/MatchResults';
import styles from './styles';

const BackButton = ({
  modalVisible,
  teamOne,
  teamTwo,
  setModalVisible,
  concludeMatch,
  addMatchToHistory,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        console.log('Modal has been closed');
      }}>
      <View style={styles.transparentModal}>
        <View style={styles.modalView}>
          <MatchResults teamOne={teamOne} teamTwo={teamTwo} />
          <View>
            <TouchableOpacity
              style={styles.button}
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
  );
};

export default BackButton;
