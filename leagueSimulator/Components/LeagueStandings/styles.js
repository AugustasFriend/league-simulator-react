import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#433F3F',
    flex: 1,
  },
  marginTop: {
    marginTop: '2%',
  },
  scoreContainer: {
    flexDirection: 'row',
  },
  nameText: {
    fontSize: 25,
    color: 'white',
    textAlignVertical: 'center',
    marginLeft: '2%',
  },
  horizontalLine: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginTop: '2%',
    marginBottom: '2%',
  },
  imageSize: {
    width: 65,
    height: 65,
  },
  imageAdjuster: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    marginLeft: '5%',
  },
  titleText:{
    fontSize: 40,
    fontFamily: 'Montserrat',
    color: 'white',
    textAlign: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  LeagueTextContainer:{
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    borderRightColor: 'black',
    borderRightWidth: 1,
    width: 270,
    backgroundColor: '#241E1E',
  },
  BracketTextContainer:{
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    width: 270,
  },
});

export default styles;
