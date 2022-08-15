import React, {useState} from 'react';
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import LeagueStandings from './LeagueStandings';
import BracketStandings from './BracketStandings/BracketStandings';
import styles from './styles';
import {connect} from 'react-redux';

const Standings = ({teams}) => {
  const [isLeague, setIsLeague] = useState(true);

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.titleContainer}>
        <TouchableOpacity
          style={styles.LeagueTextContainer}
          onPress={() => {
            setIsLeague(true);
          }}>
          <Text style={styles.titleText}>League</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.BracketTextContainer}
          onPress={() => {
            setIsLeague(false);
          }}>
          <Text style={styles.titleText}>Final Bracket</Text>
        </TouchableOpacity>
      </View>
      <LeagueStandings teams={teams} bool={isLeague} />
      <BracketStandings bool={isLeague} teams={teams} />
    </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Standings);
