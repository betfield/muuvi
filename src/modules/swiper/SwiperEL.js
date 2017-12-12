import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import SwipeCards from './components/SwipeCards';
import { ButtonsGroup, Card, NoMoreCard } from './components';
import { InfoModal } from '../infoModal';
import styles from './styles/SwiperEL';
import { addPrediction } from './actions';
import { openModalInfo, closeModalInfo } from '../ui';
import { getHeaderDate } from '../../../helpers';

class SwiperEL extends Component {
  state = { cardIndex: 0 }

  _handleAwayWin = fixture => {
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    this.props.addPrediction({
      id: fixture.id,
      name: fixture.awayTeam.name,
      image: fixture.awayTeam.logoUrl
    });
  }

  _handleHomeWin = fixture => {
    this.setState({ cardIndex: this.state.cardIndex + 1 })
    this.props.addPrediction({
      id: fixture.id,
      name: fixture.homeTeam.name,
      image: fixture.homeTeam.logoUrl
    });
  }

  _clickAwayWin= () => {
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    this._swiper._goToNextCard();
    const fixture = this.props.fixtures[this.state.cardIndex];
    this.props.addPrediction({
      id: fixture.id,
      name: fixture.awayTeam.name,
      image: fixture.awayTeam.logoUrl
    });
  }

  _clickHomeWin = () => {
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    this._swiper._goToNextCard();
    const fixture = this.props.fixtures[this.state.cardIndex];
    this.props.addPrediction({
      id: fixture.id,
      name: fixture.homeTeam.name,
      image: fixture.homeTeam.logoUrl
    });
  }

  render() {
    const { fixtures, modalInfoShow, openModalInfo, closeModalInfo, modalInfoFixture } = this.props;

    if (fixtures === null || this.state.cardIndex > fixtures.length - 1) {
      return <NoMoreCard />;
    }

    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{getHeaderDate(fixtures[this.state.cardIndex].date)}</Text>
        </View>
        <SwipeCards
          ref={ref => this._swiper = ref} // eslint-disable-line
          containerStyle={styles.swiperContainer}
          cards={fixtures}
          renderCard={data => <Card {...data} />}
          handleYup={this._handleAwayWin}
          handleNope={this._handleHomeWin}
          yupText={"Away team win!"}
          yupStyle={styles.yupAndNopeStyle}
          yupTextStyle={styles.yupTextStyle}
          nopeText={"Home team win!"}
          nopeStyle={styles.yupAndNopeStyle}
          nopeTextStyle={styles.nopeTextStyle}
          //stack={true}
          //stackOffsetY={20}
          renderNoMoreCards={() => <NoMoreCard />}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{fixtures[this.state.cardIndex].venue.name}</Text>
        </View>
        <ButtonsGroup
          info={() => openModalInfo(fixtures[this.state.cardIndex])}
          dislike={this._clickHomeWin}
          like={this._clickAwayWin}
        />
        <InfoModal
          closeModalInfo={closeModalInfo}
          close={() => closeModalInfo()}
          visible={modalInfoShow}
          fixture={modalInfoFixture}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    modalInfoShow: state.ui.modalInfoShow,
    modalInfoFixture: state.ui.modalInfoFixture
  }),
  { openModalInfo, closeModalInfo, addPrediction }
)(SwiperEL);
