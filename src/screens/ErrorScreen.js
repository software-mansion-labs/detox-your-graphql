import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ErrorScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Oops, please check if you have GraphQL server running!</Text>
        <Text style={styles.text}>To start it type: node server/index.js</Text>
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