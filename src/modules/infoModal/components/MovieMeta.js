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
    this.props.getFixtureDetails(this.props.fixture);
  }

  render() {
    const { data, fixture } = this.props;

    if (!data.isFetched) {
      console.log("fixtureDetailsNotLoaded: " + JSON.stringify(data.odds, null, 4));
      return (
        <Panel title="Ohhooodds">
          <Text>Loading...</Text>
        </Panel>
      );
    } else if (!data.error) {
      console.log("fixtureDetailsLoaded: " + JSON.stringify(data.odds, null, 4));
      return (
        <View style={styles.bottomContainer}>
          <Panel title="Odds">
            <Text style={styles.panelText}>
              {data.odds[0].name}
            </Text>
          </Panel>
          <Panel title="Form">
            <Text style={styles.panelText}>
              {data.form}
            </Text>
          </Panel>
          <Panel title="Head To Head">
            <View style={styles.buttonTrailer}>
              <Text style={styles.buttonText}>
                {data.head2head}
              </Text>
            </View>
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
