import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>this is home HomeScreen</Text>
        <Button
          title="adds second screen to stack"
          onPress={() => this.props.navigation.push('Home')}
        >
          Push Home
        </Button>
      </View>
    );
  }
}
