import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {

    goToTrainer = () => {
      this.props.navigation.navigate('Trainer')
    }

    goToPokemon = () => {
      this.props.navigation.navigate('Pokemon')
    }

    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.goToTrainer} testID="trainerButton">
            <Text style={styles.text}>Trainer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToPokemon} testID="pokemonButton">
            <Text style={styles.text}>Pokemon</Text>
          </TouchableOpacity>
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
