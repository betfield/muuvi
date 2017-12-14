import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    position: 'relative'
  },
  button: {
    position: 'absolute',
    right: '1.5%',
    top: '1%'
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: '$grayColor',
    fontFamily: 'montserrat-bold',
    fontSize: 20
  },
  panelBody: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default styles;
