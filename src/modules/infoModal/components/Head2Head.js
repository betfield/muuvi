import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Panel from './Panel';
import styles from './styles/Head2Head';
import { getH2HDate } from '../../../../helpers';
import PanelText from '../../../commons/components/PanelText';

function _renderRedCard(isRedCard){
  if (isRedCard) {
    return (
      <Image style={styles.card} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Red_card.svg/440px-Red_card.svg.png' }} />
    );
  }
}

function H2HItem(props) {
  const { data } = props;

  return (
    <View style={styles.h2hElement}>
      <View style={styles.h2hDate}>
        <PanelText text={data.date}/>
      </View>
      <View style={styles.h2hTeams}>
        <View style={styles.h2hLogoLeft}>  
          <Image style={styles.logo} source={{ uri: data.homeTeam.logoUrl }} />
        </View>
        <View style={styles.h2hScore}>
          <View style={styles.h2hCard}>
            {_renderRedCard(data.homeTeam.redCard)}
          </View>
          <View style={styles.score}>
            <PanelText text={data.score.home + ":" + data.score.away}/>  
          </View>
          <View style={styles.h2hCard}>
            {_renderRedCard(data.homeTeam.redCard)}
          </View>
        </View>
        <View style={styles.h2hLogoRight}>
          <Image style={styles.logo} source={{ uri: data.awayTeam.logoUrl }} />
        </View>
      </View>
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
            if (index < 4) {
              return <H2HItem key={index} data={h2h} />
            }
          })}
        </View>
      </Panel>
    );
  }
}

export default Head2Head;
