import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getCurrentMatchdayFixtures } from '../../home/actions';

const NoMoreCard = ({ getCurrentMatchdayFixtures }) => (
  <View style={styles.root}>
    <Text style={styles.textStyle}>No more fixtures!!!</Text>
    <TouchableWithoutFeedback onPress={() => getCurrentMatchdayFixtures()}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Try again</Text>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$redColor'
  },
  textStyle: {
    color: '#fff',
    fontSize: 35,
    fontFamily: 'montserrat-bold'
  },
  button: {
    borderWidth: 2,
    marginTop: '2%',
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'montserrat-regular',
    fontSize: 18,
    padding: 20
  }
});

export default connect(
  null,
  { getCurrentMatchdayFixtures }
)(NoMoreCard);
