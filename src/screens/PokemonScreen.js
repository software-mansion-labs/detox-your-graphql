import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ErrorScreen from './ErrorScreen';

class PokemonScreen extends Component {
  render() {
    const { loading, error, myPokemon } = this.props.data;
    if (loading) {
      return <ActivityIndicator />
    }
    if (error) {
      return <ErrorScreen />
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Your favourite Pokemon:</Text>
        <Text style={styles.text}>{`Name: ${myPokemon.name}`}</Text>
        <Text style={styles.text}>{`Level: ${myPokemon.level === 30 ? 'MaxLvl' : myPokemon.level}`}</Text>
        <Text style={styles.text}>{`Type: ${myPokemon.type}`}</Text>
        <Text style={styles.text}>{`Caught: ${new Date(myPokemon.catchDate).toUTCString()}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default graphql(gql`
  query PokemonQuery {
    myPokemon {
        id
        name
        type
        level
        catchDate
    }
  }
`)(PokemonScreen);
