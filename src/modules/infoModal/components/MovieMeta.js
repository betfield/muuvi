import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import styles from './styles/MovieMeta';
import Panel from './Panel';
import { getFixtureDetails } from '../actions';

class MovieMeta extends Component {

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
            <Text style={styles.panelText}>
              {data.odds[0].name}
            </Text>
          </Panel>
          <Panel title="Form">
            <Text style={styles.panelText}>
            {data.homeForm.name}
            {data.awayForm.name}
            </Text>
          </Panel>
          <Panel title="Head To Head">
            <Text style={styles.panelText}>
              {data.head2head[0].localteam_id}
            </Text>
          </Panel>
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
)(MovieMeta);
