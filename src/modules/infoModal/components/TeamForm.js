import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Panel from './Panel';
import styles from './styles/TeamForm';
import PanelText from '../../../commons/components/PanelText';

function renderFormElement(form, url) {
  return (
    <View style={styles.formElement}>
      <View style={styles.teamPos}>
        <PanelText text={form.position + "."}/>
      </View>
      <View style={styles.teamLogo}>
        <Image style={styles.logo} source={{ uri: url }} />
      </View>
      {renderRecentForm(form.recent_form)}
      <View style={styles.teamPts}>
        <PanelText text={form.points + "p"}/>
      </View>
    </View>
  );
}

function renderRecentForm(form) {
  let formArray = form.split('');

  //TODO: Add proper colors

  return (
    <View style={styles.teamForm}>
      {formArray.map((res, index) => {
        let color = "grey";

        if (index < 5) {
          switch(res) {
            case "W":
              color = "green";
              break;
            case "L":
              color = "red";
              break;
          }

          return (
            <View style={[styles.formItem, {backgroundColor: color}]} key={index}>
              <PanelText text={res}/>
            </View>
          );
        }
      })}
    </View>
  );
}

class TeamForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    const { homeForm, awayForm, fixture } = this.props;

    return (
      <Panel title="Form">
        <View style={styles.formContainer}>
          {renderFormElement(homeForm, fixture.homeTeam.logoUrl)}
          {renderFormElement(awayForm, fixture.awayTeam.logoUrl)}
        </View>
      </Panel>
    );
  }
}

export default TeamForm;
