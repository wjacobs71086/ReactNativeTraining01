import React from 'react';
// Imports only parts of a imported library.
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <View>
      <Text style={{ fontSize: 45 }}>Getting started with React Native!</Text>
      <Text style={styles.textStyle}>My name is earl</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: 'red',
  },
});

export default ComponentsScreen;
