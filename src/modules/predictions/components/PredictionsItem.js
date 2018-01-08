import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from './styles/PredictionsItem';
import { removePrediction } from '../../swiper/actions';
import { connect } from 'react-redux';
import PanelText from '../../../commons/components/PanelText';
import Colors from '../../../../constants/Colors';

class PredictionsItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    const prediction = this.props.prediction.item.prediction;
    console.log("fixtuuur: " + JSON.stringify(prediction, null, 4));

    return (
      <View style={styles.fixtureContainer}>
        <View style={styles.fixtureImageContainer}>
          <Image
            style={styles.fixtureImage}
            source={{ uri: prediction.fixture.homeTeam.logoUrl }}
          />
          <Image
            style={styles.fixtureImage}
            source={{ uri: prediction.fixture.awayTeam.logoUrl }}
          />
          <View style={styles.fixtureText}>
            <Text>{prediction.userPrediction}</Text>
          </View>
        </View>
        <View style={styles.fixtureDeleteContainer}>
          <TouchableWithoutFeedback
            onPress={() => this.props.removePrediction(prediction.fixture.id)}
          >
            <View style={styles.deleteButton}>
              <FontAwesome name="trash" color={Colors.redColor} size={25} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

export default connect(
  state => ({
    data: state.predictions
  }),
  { removePrediction }
)(PredictionsItem);
