import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  imageContainer: {
    marginVertical: '1.5%',
    marginHorizontal: '1.5%',
    width: 185,
    height: 277,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.8
  },
  image: {
    flex: 1,
    width: null,
    height: null
  },
});

export default styles;
