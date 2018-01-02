import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from './styles/PanelText';

class PanelText extends Component {

  render() {
    
    const { text } = this.props;

    return (
      <Text style={styles.panelText}>
        {text}
      </Text>
    );
  }
}

export default PanelText;
