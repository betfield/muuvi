import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles/Card';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log("Card render funktsioonis: " + JSON.stringify(this.props, null, 4));
    return (
      <View style={styles.posterCard}>
        <View style={styles.poster}>
          <Image style={styles.logo} source={{ uri: this.props.homeTeam.logoUrl }} />
          <Text style={styles.textStyle}>{this.props.homeTeam.name}</Text>
        </View>
        <View style={styles.vs}>
          <Text style={styles.textStyle}> vs </Text>
        </View>
        <View style={styles.poster}>
          <Image style={styles.logo} source={{ uri: this.props.awayTeam.logoUrl }} />
          <Text style={styles.textStyle}>{this.props.awayTeam.name}</Text>
        </View>
      </View>
    )
  }
}

export default Card;
