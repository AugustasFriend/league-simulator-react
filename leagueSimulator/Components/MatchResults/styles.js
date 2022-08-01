import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageAdjuster: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  imageSize: {
    width: 120,
    height: 120,
  },
  scoreText:{
    color: 'white',
    fontSize: 40,
    fontFamily: 'Montserrat',
  },
  teamContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flexDirection: 'row',
  },
  scoreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dash: {
    fontSize: 80,
  },
});

export default styles;
