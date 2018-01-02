import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  h2hContainer: {
    flex: 1,
    height: 150,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  h2hElement: {
    width: '50%',
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    paddingBottom: 20
    //borderRadius: 4,
    //borderWidth: 0.5,
    //borderColor: '#d6d7da',
  },
  h2hDate: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h2hTeams: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  h2hScore: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',    
    flexWrap: 'nowrap'
  },
  h2hCard: {
    alignItems: 'center',
  },
  score: {
    paddingLeft: 5,
    paddingRight: 5
  },
  h2hLogoLeft: {
    flex: 0.3,
    alignItems: 'flex-end',
  },
  h2hLogoRight: {
    flex: 0.3,
    alignItems: 'flex-start',
  },
  logo: {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  card: {
    width: 10,
    height: 15,
  }
});

export default styles;
