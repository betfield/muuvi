import EStyleSheet from 'react-native-extended-stylesheet';

jewelStyle = function(options) {
  return {
    borderRadius: 10,
    background: randomColor(),
  }
}

const styles = EStyleSheet.create({
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    height: 50,
  },
  formElement: {
    flex: 1,
    flexDirection: 'row',    
    width: '100%',
    alignItems: "center"
  },
  teamPos: {
    flex: 0.1,
    alignItems: "flex-end"
  },
  teamLogo: {
    flex: 0.1,
    paddingLeft: 5,
    alignItems: "flex-start"
  },
  teamForm: {
    flex: 0.6,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    width: '100%'
  },
  formItem: {
    alignItems: "center",
    width: 23,
    height: 20,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  teamPts: {
    flex: 0.2,
    alignItems: "center"
  },
  logo: {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  panelText: {
    color: '$grayColor',
    fontFamily: 'montserrat-regular',
    fontSize: 16
  }
});

export default styles;
