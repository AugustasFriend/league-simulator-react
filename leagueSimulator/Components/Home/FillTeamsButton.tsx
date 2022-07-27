import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {loadPlayersToTeams} from '../../Actions/Actions';
import {connect} from 'react-redux';
import styles from './styles';

const FillTeamsButton = ({loadPlayersToTeams}) => {
  return (
    <View style={styles.fillButtonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          loadPlayersToTeams();
        }}>
        <Text style={styles.buttonText}>Fill Teams</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loadPlayersToTeams: () => dispatch(loadPlayersToTeams()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FillTeamsButton);
