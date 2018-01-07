import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  fixtureContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  fixtureImageContainer: {
    flex: 0.8,
    flexDirection: 'row',
    height: 100, //was 35%
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  fixtureText: {
    width: '100%',
    height: 100, //was 35%
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  fixtureImage: {
    width: 100,
    height: 100,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  fixtureDeleteContainer: {
    flex: 0.2,
    height: 100,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  deleteButton: {
  }
});

export default styles;
