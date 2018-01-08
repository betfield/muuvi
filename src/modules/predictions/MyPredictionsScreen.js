import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './styles/MyPredictionsScreen';
import PredictionsHeader from './components/PredictionsHeader';
import PredictionsList from './components/PredictionsList';
import { getMatchdays } from './actions';

class MyPredictionsScreen extends Component {
  
  componentDidMount() {
    this.props.getMatchdays();
  }
  
  render() {

    const { data, matchdays } = this.props;

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
      } else {
        if (!matchdays.isFetched) {
          return (
            <View style={styles.root}>
              <View style={styles.headerContainer}>
                <Text>Loading...</Text>
              </View>
            </View>
          );
        } else if (!matchdays.error) {
        return (
          <View style={styles.root}>
            <View style={styles.headerContainer}>
              <PredictionsHeader matchdays={matchdays}/>
            </View>
            <View style={styles.listContainer}>
              <PredictionsList data={data}/>
            </View>
          </View>
        );
      }
    }
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }
}

export default connect(
  state => ({
    data: state.predictions,
    matchdays: state.matchdays
  }),
  { getMatchdays }
)(MyPredictionsScreen);

// TODO: Line 38: 
// Parameter crashes the app