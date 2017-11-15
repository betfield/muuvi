import Expo, { Font } from 'expo';
import React from 'react';
// import { Provider } from 'react-redux';
// import { persistStore } from 'redux-persist';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry
  // AsyncStorage
} from 'react-native';
import gql from 'graphql-tag';

import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

//import { createNetworkInterface } from 'apollo-client';

import EStyleSheet from 'react-native-extended-stylesheet';
import store from './src/redux/store';
import Colors from './constants/Colors';
import Routes from './src/Routes';

EStyleSheet.build(Colors);

const fonts = {
  'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
};

const networkInterface = createNetworkInterface({ uri: 'https://fctwister.ee/graphql' });

export const client = new ApolloClient({
  networkInterface: networkInterface
});

class App extends React.Component {
  state = {
    fontLoaded: false,
    rehydrated: false
  }

  async componentDidMount() {
    // await persistStore(store, {
    //   storage: AsyncStorage,
    //   debounce: 500
    // });  

    await Font.loadAsync(fonts);
    
    this.setState({ fontLoaded: true, rehydrated: true });
    
  }
  render() {
    if (!this.state.fontLoaded && !this.state.rehydrated) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <ApolloProvider client={client} store={store}>
        <Routes />
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

Expo.registerRootComponent(App);
