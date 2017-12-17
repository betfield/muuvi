import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Panel from './Panel';
import styles from './styles/TeamForm';

class TeamForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    const { homeForm, awayForm } = this.props;
    console.log("HomeForm: " + JSON.stringify(homeForm, null, 4));

    return (
      <Panel title="Form">
        <Text style={styles.panelText}>
          {homeForm.name}
          {awayForm.name}
        </Text>
      </Panel>
    );
  }
}

export default TeamForm;
