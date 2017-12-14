import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  h2hContainer: {
    flex: 1,
    height: 150,
    flexDirection: 'column'
  },
  h2hElement: {
    flex: 1,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //borderRadius: 4,
    //borderWidth: 0.5,
    //borderColor: '#d6d7da',
  },
  panelText: {
    color: '$grayColor',
    fontFamily: 'montserrat-regular',
    fontSize: 16
  }
});

export default styles;
