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

const TeamInfo = ({team, teams}) => {
  return (
    <View style={styles.teamView}>
      <Image source={images[team.bigIconIndex]} />
      <Text style={styles.teamOneText}>
        {team.wins}
        <Text style={{color: 'green'}}>W</Text> - {team.draws}D - {team.losses}
        <Text style={{color: '#e61919'}}>L</Text>
      </Text>
      <View style={styles.matchHistoryContainer}>
        {team.matchHistory.length === 0 && (
          <Text style={{color: 'white', fontSize: 14}}>No matches played</Text>
        )}
        {team.matchHistory
          .slice(0)
          .reverse()
          .slice(0, 3)
          .map((match, index) => (
            <View style={styles.historyView}>
              <View style={styles.imageSize}>
                <Image
                  source={
                    images[
                      teams.find(teamx => teamx.name == match[0]).bigIconIndex
                    ]
                  }
                  style={styles.imageAdjuster}
                />
              </View>
              <Text
                style={
                  match[1] == 1
                    ? styles.historyTextGreen
                    : match[1] == -1
                    ? styles.historyTextRed
                    : styles.historyTextWhite
                }>
                {match[1] == 1 ? 'W' : match[1] == -1 ? 'L' : 'D'}
              </Text>
              <View />
            </View>
          ))}
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    teams: state.teamReducer.teams,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamInfo);
