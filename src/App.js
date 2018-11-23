import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import HomeScreen from './screens/HomeScreen';
import TrainerScreen from './screens/TrainerScreen';
import PokemonScreen from './screens/PokemonScreen';

const cache = new InMemoryCache();
const httpLink = createHttpLink({
  uri: "http://localhost:8089/graphql",
});

const client = new ApolloClient(({
  link: ApolloLink.from([httpLink]),
  cache,
}));

const RootStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Trainer: { screen: TrainerScreen },
  Pokemon: { screen: PokemonScreen },
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStack />
      </ApolloProvider>
    );
  }
}
