import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const WeekTab = ({week}) => {
  return (
    <View style={styles.weekView}>
      <Text style={styles.weekTextSide}>Week {week - 1}</Text>
      <Text style={styles.weekTextMiddle}>Week {week}</Text>
      <Text style={styles.weekTextSide}>Week {week + 1}</Text>
    </View>
  );
};

export default WeekTab;
