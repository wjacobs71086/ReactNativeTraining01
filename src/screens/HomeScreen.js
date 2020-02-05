import React from "react";
import { Text, StyleSheet } from "react-native";
import ComponentsScreen from './screens/ComponentsScreen';

const HomeScreen = () => {
  return (
    <ComponentsScreen />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
