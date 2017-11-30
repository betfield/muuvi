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
    const { fixture } = this.props;
    const { odds, form, head2head } = this.props.data;
    console.log("Ooooods: " + JSON.stringify(odds, null, 4));

    return (
      <View style={styles.bottomContainer}>
        <Panel title="Odds">
          <Text style={styles.panelText}>
            {odds}
          </Text>
        </Panel>
        <Panel title="Form">
          <Text style={styles.panelText}>
            {form}
          </Text>
        </Panel>
        <Panel title="Head To Head">
          <View style={styles.buttonTrailer}>
            <Text style={styles.buttonText}>
              {head2head}
            </Text>
          </View>
        </Panel>
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
