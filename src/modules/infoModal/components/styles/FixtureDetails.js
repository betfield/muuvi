import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    zIndex: 1,
    backgroundColor: '$darkBlackColor'
  },
  oddsElement: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  panelText: {
    color: '$grayColor',
    fontFamily: 'montserrat-regular',
    fontSize: 16
  },
  buttonText: {
    color: '$blueColor',
    padding: 5,
    fontFamily: 'montserrat-regular',
    fontSize: 14
  }
});

export default styles;
