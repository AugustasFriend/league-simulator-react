import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';

const Schedule = ({week}: number) => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <View style={styles.weekView}>
          <Text style={styles.weekTextSide}>Week {week - 1}</Text>
          <Text style={styles.weekTextMiddle}>Week {week}</Text>
          <Text style={styles.weekTextSide}>Week {week + 1}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    week: state.scheduleReducer.currentRound,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
