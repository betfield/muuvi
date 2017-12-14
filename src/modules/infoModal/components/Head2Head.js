import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Panel from './Panel';
import styles from './styles/Head2Head';
import { getH2HDate } from '../../../../helpers';

function H2HItem(props) {
  console.log("Head2Head: " + JSON.stringify(props.data, null, 4));
  return (
    <View style={styles.h2hElement}>
      <Text style={styles.panelText}>
        {props.data.date} {props.data.homeTeam.name} vs {props.data.awayTeam.name} {props.data.score.home}:{props.data.score.away}
      </Text>
    </View>
  );
}

class Head2Head extends Component {

  constructor(props) {
    super(props);
  }

  _getHead2HeadData(h2hData) {
    let result = [];

    h2hData.forEach(e => {
      let h2h = {
        date: getH2HDate(e.time.starting_at.date),
        homeTeam: {
          id: e.localTeam.data.id,
          name: e.localTeam.data.name,
          logoUrl: e.localTeam.data.logo_path,
          redCard: false
        },
        awayTeam: {
          id: e.visitorTeam.data.id,
          name: e.visitorTeam.data.name,
          logoUrl: e.visitorTeam.data.logo_path,
          redCard: false
        },
        score: {
          home: e.scores.localteam_score,
          away: e.scores.visitorteam_score
        }
      }

      let cards = e.cards.data;

      // Check if team has red card for showing it next to the fixture
      cards.forEach(card => {
        if (card.type === "redcard") {
          if (card.team_id === e.localteam_id) {
            h2h.homeTeam.redCard = true;
          } else if (card.team_id === e.localteam_id) {
            h2h.awayTeam.redCard = true;
          }
        }
      })

      result.push(h2h);
    });

    return result;
  }

  render() {
    
    const { data } = this.props;

    return (
      <Panel title="Head To Head">
        <View style={styles.h2hContainer}>
          {this._getHead2HeadData(data).map((h2h, index) => {
            if (index < 5)
              return <H2HItem key={index} data={h2h}/>
          })}
        </View>
      </Panel>
    );
  }
}

export default Head2Head;
