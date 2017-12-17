import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  oddsContainer: {
    flex: 1
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
  }
});

export default styles;
