import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './styles/MyPredictionsScreen';
import PredictionsHeader from './components/PredictionsHeader';
import PredictionsList from './components/PredictionsList';

class MyPredictionsScreen extends Component {
  render() {

    const { data } = this.props;

    if (data.length < 1) {
      return (
        <View style={styles.root}>
          <View style={styles.container}>
            <Text style={styles.getFixtureText}>
              No predictions yet!
            </Text>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <View style={styles.headerContainer}>
          <PredictionsHeader data={data}/>
        </View>
        <View style={styles.listContainer}>
          <PredictionsList data={data}/>
        </View>
      </View>
    );
  }
}

export default connect(
  state => ({
    data: state.predictions
  })
)(MyPredictionsScreen);

// TODO: Line 38: 
// Parameter crashes the app