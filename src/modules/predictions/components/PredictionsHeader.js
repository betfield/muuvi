import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles/PredictionsHeader';
import PanelText from '../../../commons/components/PanelText';

class PredictionsHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    const { matchdays } = this.props;

    return (
      <ScrollView horizontal style={styles.predictionsHeaderContainer}>
      <Text>{matchdays.matchdays.length}</Text>
      </ScrollView>
    );
  }
}

export default PredictionsHeader;
