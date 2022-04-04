import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#433F3F',
    flex: 1,
  },
  bigtext: {
    fontSize: 30,
    fontFamily: 'Montserrat',
    color: 'white',
    alignSelf: 'center',
    marginTop: '20%',
  },
  dash: {
    fontSize: 100,
  },
  teamView: {
    alignItems: 'center', //Centered vertically
    flex: 1,
  },
  teamOneText: {
    fontSize: 30,
    color: 'white',
    marginTop: '5%',
  },
  teamTwoText: {
    fontSize: 30,
    color: 'white',
    marginTop: '5%',
  },
  HomeViewTeamContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '10%',
  },
  watchButton: {
    width: 200,
    height: 60,
    backgroundColor: '#333333',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  watchButtonText: {
    textAlign: 'center',
    paddingTop: '4%',
    color: 'white',
    fontSize: 30,
  },
});

export default styles;