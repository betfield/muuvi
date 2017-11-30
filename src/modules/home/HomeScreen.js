import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getCurrentMatchdayFixtures } from './actions';
import { LoadingScreen } from '../../commons';
import { SwiperEL } from '../swiper';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getCurrentMatchdayFixtures();
  }
  render() {
    const { data, navigator } = this.props;
    
    if (!data.isFetched) {
      return <LoadingScreen />;
    } else if (!data.error) {
      return <SwiperEL fixtures={data.fixtures} navigator={navigator} />;
    }
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }
}

//Connect component to the Redux store ("state" object provided to the ApolloProvider)
export default connect(
  //Map only the "home" reducer (./reducer.js) as state 
  // ---- (rather than the complete Redux store as state) ----
  //to HomeScreen component props
  state => ({
    data: state.home
  }),
  //Map getCurrentMatchdayFixtures dispatch function (action creator)
  //to HomeScreen component props
  { getCurrentMatchdayFixtures }
)(HomeScreen);
