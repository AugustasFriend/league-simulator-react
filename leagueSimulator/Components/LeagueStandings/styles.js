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
});

export default styles;
