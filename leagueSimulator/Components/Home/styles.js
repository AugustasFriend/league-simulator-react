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
    marginTop: '12%',
  },
  dash: {
    fontSize: 100,
  },
  teamView: {
    alignItems: 'center', //Centered vertically
    flex: 1,
  },
  MainHomeContainer: {
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
  HomeViewButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '15%',
    alignSelf: 'center',
  },
  watchButton: {
    width: 200,
    height: 60,
    backgroundColor: '#333333',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonText: {
    textAlign: 'center',
    paddingTop: '4%',
    color: 'white',
    fontSize: 30,
  },
  modalView: {
    backgroundColor: '#433F3F',
    width: '80%',
    height: '70%',
    alignSelf: 'center',
    borderRadius: 20,
    alignItems: 'center',
  },
  transparentModal: {
    flex: 1,
    backgroundColor: '#000000AA',
    justifyContent: 'center',
  },
  backButtonView: {},

  // --- matchHistory styles ---
  historyTextRed: {
    fontSize: 30,
    fontFamily: 'Montserrat',
    color: '#e61919',
    textAlignVertical: 'center',
  },
  historyTextWhite: {
    fontSize: 30,
    fontFamily: 'Montserrat',
    color: 'white',
    textAlignVertical: 'center',
  },
  historyTextGreen: {
    fontSize: 30,
    fontFamily: 'Montserrat',
    color: 'green',
    textAlignVertical: 'center',
  },
  historyView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageSize: {
    width: 45,
    height: 45,
  },
  imageAdjuster: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    marginLeft: '5%',
  },
  matchHistoryContainer: {
    marginTop: '4%',
    backgroundColor: '#2E2C2C',
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 1,
    padding: '2%',
  }
});

export default styles;
