import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import Images from '../Misc/Images';

const TeamInfo = ({team, teams}) => {
  return (
    <View style={styles.teamView}>
      <Image source={Images[team.bigIconIndex]} />
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
                    Images[
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
      <View>
        {team.players.map(player => (
          <Text>{player.nameAbb}</Text>
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
