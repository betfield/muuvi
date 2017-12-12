import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from './styles/MyPredictionsScreen';
import { removePrediction } from '../swiper/actions';
import Colors from '../../../constants/Colors';

class MyPredictionsScreen extends Component {
  render() {
    if (this.props.data.length < 1) {
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
        <ScrollView horizontal style={{ flex: 0.5 }}>
          {this.props.data.map((fixture, i) => (
            <View style={styles.fixtureContainer} key={i}>
              <View style={styles.fixtureImageContainer}>
                <Image
                  style={styles.fixtureImage}
                  source={{ uri: fixture.image }}
                />
                <Text>{fixture.name}</Text>
              </View>
              <TouchableWithoutFeedback
                onPress={() => this.props.removePrediction(fixture.id)}
              >
                <View style={styles.deleteButton}>
                  <Text style={styles.deleteText}>Remove</Text>
                  <FontAwesome name="trash" color={Colors.redColor} size={25} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default connect(
  state => ({
    data: state.predictions
  }),
  { removePrediction }
)(MyPredictionsScreen);

// TODO: Line 38: 
// Parameter crashes the app