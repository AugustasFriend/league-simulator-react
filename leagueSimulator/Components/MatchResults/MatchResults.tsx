import React, {useState} from 'react';
import {Modal, View, TouchableOpacity, SafeAreaView, Text} from 'react-native';
import styles from '../Home/styles';
import {connect} from 'react-redux';

const MatchResults = ({teamOneScore, teamTwoScore, teamOne, teamTwo}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <Text>
        {teamOne.name} {teamOneScore}
      </Text>
      <Text>
        {teamTwo.name} {teamTwoScore}
      </Text>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    teamOneScore: state.teamReducer.teamOneScore,
    teamTwoScore: state.teamReducer.teamTwoScore,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchResults);
