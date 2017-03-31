import React, { Component } from 'react';
import styles from './styles';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

export default class Detail extends Component {
  render() {
    return (
      <View>
        <Text>Dashboard</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Detail', () => Detail);
