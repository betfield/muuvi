import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '$blackColor'
  },
  headerContainer: {
    flex: 10
  },
  listContainer: {
    flex: 100
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  getFixtureText: {
    fontFamily: 'montserrat-regular',
    color: '$blueColor',
    fontSize: 16
  }
});

export default styles;
