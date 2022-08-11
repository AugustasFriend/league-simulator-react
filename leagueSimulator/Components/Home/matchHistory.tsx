import React from 'react';
import {Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import Images from '../Misc/Images';

const matchHistory = ({team, teams}) => {
  return (
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
/*<Image
source={
  images[
    teams.filter(teamx => teamx.name != match[0]).bigIconIndex
  ]
}
/>*/
export default connect(mapStateToProps, mapDispatchToProps)(matchHistory);
