import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Panel from './Panel';
import styles from './styles/Odds';
import PanelText from '../../../commons/components/PanelText';

class Odds extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    const { odds } = this.props;
    let odds3Way = [{},{},{}];

    try {
      odds3Way = odds[0].bookmaker.data[0].odds.data;
    }
    catch (e) {
      console.log("No bookmaker data available:" + e);
    }

    return (
      <Panel title="Odds">
        <View style={styles.oddsElement}>
          <PanelText text={odds3Way[0].label}/>
          <PanelText text={odds3Way[0].value}/>
        </View>
        <View style={styles.oddsElement}>
          <PanelText text={odds3Way[1].label}/>
          <PanelText text={odds3Way[1].value}/>
        </View>
        <View style={styles.oddsElement}>
          <PanelText text={odds3Way[2].label}/>
          <PanelText text={odds3Way[2].value}/>
        </View>
      </Panel>
    );
  }
}

export default Odds;
