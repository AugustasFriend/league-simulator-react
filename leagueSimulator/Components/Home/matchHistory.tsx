import React from 'react';
import {Text, View, Image} from 'react-native';
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

const matchHistory = ({team, teams}) => {
  return (
    <View style={{marginTop: '4%'}}>
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
