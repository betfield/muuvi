import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Panel from './Panel';
import styles from './styles/Odds';

class Odds extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    const { odds } = this.props;

    return (
      <Panel title="Odds">
        <View style={styles.oddsElement}>
          <Text style={styles.panelText}>
            {odds[0].bookmaker.data[0].odds.data[0].label}
          </Text>
          <Text style={styles.panelText}>
            {odds[0].bookmaker.data[0].odds.data[0].value}
          </Text>
        </View>
        <View style={styles.oddsElement}>
          <Text style={styles.panelText}>
            {odds[0].bookmaker.data[0].odds.data[1].label}
          </Text>
          <Text style={styles.panelText}>
            {odds[0].bookmaker.data[0].odds.data[1].value}
          </Text>
        </View>
        <View style={styles.oddsElement}>
          <Text style={styles.panelText}>
            {odds[0].bookmaker.data[0].odds.data[2].label}
          </Text>
          <Text style={styles.panelText}>
            {odds[0].bookmaker.data[0].odds.data[2].value}
          </Text>
        </View>
      </Panel>
    );
  }
}

export default Odds;
