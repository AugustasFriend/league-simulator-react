import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#433F3F',
    flex: 1,
  },
  weekView: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  weekTextSide: {
    fontSize: 25,
    color: 'grey',
    fontFamily: 'Montserrat',
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: '2%',
  },
  weekTextMiddle: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Montserrat',
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: '2%',
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginTop: '1%',
  },
  matchView: {
    justifyContent: 'center',
    flexDirection: 'row',
  }
});

export default styles;
