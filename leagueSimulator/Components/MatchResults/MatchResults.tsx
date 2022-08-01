import React, {useState} from 'react';
import {View, Image, SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

const MatchResults = ({teamOneScore, teamTwoScore, teamOne, teamTwo}) => {
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

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{marginTop: '70%'}} />
      <View style={styles.teamContainer}>
        <View style={styles.imageSize}>
          <Image
            source={images[teamOne.bigIconIndex]}
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
            source={images[teamTwo.bigIconIndex]}
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
