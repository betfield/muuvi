import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/PredictionsList';
import PredictionsItem from './PredictionsItem';
import PanelText from '../../../commons/components/PanelText';

class PredictionsList extends Component {

  constructor(props) {
    super(props);
  }

  _renderFunction = (item) => {
    return (
      <PredictionsItem prediction={item}/>
    )
  }

  render() {
    
    const { data } = this.props;
    
    return (
      <View style={styles.predictionsListContainer}>
        <FlatList 
          data={data}
          renderItem={this._renderFunction}
          keyExtractor={item => item.prediction.fixture.id}
        />
      </View>
    );
  }
}

export default PredictionsList;
