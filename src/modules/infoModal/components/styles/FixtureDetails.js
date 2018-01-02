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
  buttonText: {
    color: '$blueColor',
    padding: 5,
    fontFamily: 'montserrat-regular',
    fontSize: 14
  }
});

export default styles;
