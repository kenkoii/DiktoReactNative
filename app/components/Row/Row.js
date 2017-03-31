import React, { Component } from 'react';
import Separator from '../Util/Separator';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'column',
    marginBottom: 10
  },
  partOfSpeech: {
    fontSize: 18,
    color: '#e74c3c',
    marginBottom: 15
  },
  definition: {
    fontSize: 16,
    marginBottom: 15
  }
});

const Row = (props) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.partOfSpeech}>
            {`${props.partOfSpeech}`}
            </Text>
            <Text style={styles.definition}>
            {`${props.definition}`}
            </Text>
            <Separator />
        </View>
    );
}

export default Row;