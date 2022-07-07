import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const FillTeamsButton = () => {
  return (
    <View style={styles.fillButtonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Fill Teams</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FillTeamsButton;
