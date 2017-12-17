import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import styles from './styles/FixtureDetails';
import Panel from './Panel';
import Head2Head from './Head2Head';
import TeamForm from './TeamForm';
import Odds from './Odds';
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
          <Odds odds={data.odds}/>
          <TeamForm homeForm={data.homeForm} awayForm={data.awayForm}/>
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
