import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from './styles/PredictionsItem';
import PanelText from '../../../commons/components/PanelText';
import Colors from '../../../../constants/Colors';

class PredictionsItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    const fixture = this.props.fixture.item;
    console.log("fixtuuur: " + JSON.stringify(fixture, null, 4));

    return (
      <View style={styles.fixtureContainer}>
        <View style={styles.fixtureImageContainer}>
          <Image
            style={styles.fixtureImage}
            source={{ uri: fixture.image }}
          />
          <View style={styles.fixtureText}>
            <Text>{fixture.name}</Text>
          </View>
        </View>
        <View style={styles.fixtureDeleteContainer}>
          <TouchableWithoutFeedback
            onPress={() => this.props.removePrediction(fixture.id)}
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

export default PredictionsItem;
