import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '$blackColor'
  },
  movieContainer: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  movieImageContainer: {
    flex: 1,
    //height: 700, //was 35%
    width: 200, //was 45%
    marginHorizontal: 5, //was 1.5%
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.8
  },
  movieImage: {
    flex: 1,
    width: null,
    height: null
  },
  deleteButton: {
    flex: 0.15,
    marginTop: 10, //was 1%
    marginBottom: 10,
    width: 200,
    //height: '7%',
    marginHorizontal: 5, //was 1.5%
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '$redColor'
  },
  deleteText: {
    fontFamily: 'montserrat-regular',
    color: '$redColor',
    fontSize: 16
  },
  getMeMovieContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  getMovieButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '$blueColor',
    padding: 40,
    flexDirection: 'row'
  },
  getMovieText: {
    fontFamily: 'montserrat-regular',
    color: '$blueColor',
    fontSize: 16
  }
});

export default styles;
