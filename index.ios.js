import React, { Component } from 'react';
import Home from './app/components/Home';
import {
  AppRegistry,
  StatusBar,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

export default class StudyApp extends Component {
  render() {
    return (
        <Home />
    );
  }
}

// <NavigatorIOS
//     barTintColor='#e74c3c'
//     titleTextColor='#fff'
//     tintColor='#fff'
//     style={styles.container}
//     initialRoute={{
//       title: 'Dikto',
//       component: Home,
//     }} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6f6f6f'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('StudyApp', () => StudyApp);
