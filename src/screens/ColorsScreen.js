import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorScreen = () => {
  return <View>
    <Button title='Click for more colors'/>
    <Text style={styles.colors}>Color Screen</Text>
  </View>;
};

const styles = StyleSheet.create({
  colors:{
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
})
export default ColorScreen;