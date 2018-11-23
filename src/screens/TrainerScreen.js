import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ErrorScreen from './ErrorScreen';

class TrainerScreen extends Component {
  render() {
    const { loading, error, trainer } = this.props.data;
    if (loading) {
      return <ActivityIndicator />
    }
    if (error) {
      return <ErrorScreen />
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{trainer.name}</Text>
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
  query TrainerQuery {
    trainer {
        id
        name
    }
  }
`)(TrainerScreen);
