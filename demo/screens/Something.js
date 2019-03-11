import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Some extends Component {
  render() {
    return (
      <View>
        <Text>Another screen</Text>
        <Text
          title="secondscreen"
          onPress={() => this.props.navigation.navigate('Home')}
        >
          Go to home screen
        </Text>
      </View>
    );
  }
}
