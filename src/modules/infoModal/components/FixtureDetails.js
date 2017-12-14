import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import styles from './styles/FixtureDetails';
import Panel from './Panel';
import Head2Head from './Head2Head';
import { getFixtureDetails } from '../actions';

class FixtureDetails extends Component {

  componentDidMount() {
    this.props.getFixtureDetails(this.props.fixture, 2);
  }

  render() {
    const { data, fixture } = this.props;

    if (!data.isFetched) {
      return (
        <View style={styles.bottomContainer}>
          <Panel title="Loading...">
            <Text style={styles.panelText}>
              Loading...
            </Text>
          </Panel>
        </View>
      );
    } else if (!data.error) {
      return (
        <View style={styles.bottomContainer}>
          <Panel title="Odds">
            <View style={styles.oddsElement}>
              <Text style={styles.panelText}>
                {data.odds[0].bookmaker.data[0].odds.data[0].label}
              </Text>
              <Text style={styles.panelText}>
                {data.odds[0].bookmaker.data[0].odds.data[0].value}
              </Text>
            </View>
            <View style={styles.oddsElement}>
              <Text style={styles.panelText}>
                {data.odds[0].bookmaker.data[0].odds.data[1].label}
              </Text>
              <Text style={styles.panelText}>
                {data.odds[0].bookmaker.data[0].odds.data[1].value}
              </Text>
            </View>
            <View style={styles.oddsElement}>
              <Text style={styles.panelText}>
                {data.odds[0].bookmaker.data[0].odds.data[2].label}
              </Text>
              <Text style={styles.panelText}>
                {data.odds[0].bookmaker.data[0].odds.data[2].value}
              </Text>
            </View>
          </Panel>
          <Panel title="Form">
            <Text style={styles.panelText}>
            {data.homeForm.name}
            {data.awayForm.name}
            </Text>
          </Panel>
          <Head2Head data={data.head2head}/>
        </View>
      );
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
    data: state.infoModal
  }),
  { getFixtureDetails }
)(FixtureDetails);
