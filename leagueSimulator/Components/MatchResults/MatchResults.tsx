import React, {useState} from 'react';
import {View, Image, SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import Images from '../Misc/Images';

const MatchResults = ({teamOneScore, teamTwoScore, teamOne, teamTwo}) => {

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{marginTop: '70%'}} />
      <View style={styles.teamContainer}>
        <View style={styles.imageSize}>
          <Image
            source={Images[teamOne.bigIconIndex]}
            style={styles.imageAdjuster}
          />
        </View>
        <View>
          {teamOne.players.map(player => (
            <Text>{player.nameAbb}</Text>
          ))}
        </View>
      </View>
      <View style={{marginLeft: '5%'}}/>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{teamOneScore}</Text>
        <Text style={styles.dash}>-</Text>
        <Text style={styles.scoreText}>{teamTwoScore}</Text>
      </View>
      <View style={{marginRight: '5%'}}/>
      <View style={styles.teamContainer}>
        <View style={styles.imageSize}>
          <Image
            source={Images[teamTwo.bigIconIndex]}
            style={styles.imageAdjuster}
          />
        </View>
        <View>
          {teamTwo.players.map(player => (
            <Text>{player.nameAbb}</Text>
          ))}
        </View>
      </View>
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
