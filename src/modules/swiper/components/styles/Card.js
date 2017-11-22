import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  posterCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 10,
    width: 340,   // need to find way to make this dynamic, flex only working for height
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowColor: 'black',
    shadowOpacity: 0.8,
    //backgroundColor: '$redColor',
    //borderWidth: 1,
    //borderColor: '$redColor',    
  },
  poster: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  vs: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 10
  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'montserrat-regular'
  },
});

export default styles;