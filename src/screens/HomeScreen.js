import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = ({ navigation }) => (
  <View>
    <Text style={styles.text}>Welcome to the Home Screen </Text>
    <Button
      title="Go to List Demo"
      onPress={() => navigation.navigate("List")}
      style={styles.buttons}
    />
    <Button
      title="Go to Components Demo"
      onPress={() => navigation.navigate("Components")}
      style={styles.buttons}
    />
    <Button
      title="Go to Image Page Demo"
      onPress={() => navigation.navigate("Image")}
      style={styles.buttons}
    />
    <Button
      title="Go to Counter Page Demo"
      onPress={() => navigation.navigate("Counter")}
      style={styles.buttons}
    />
    <Button
      title="Go to Color Page Demo"
      onPress={() => navigation.navigate("Colors")}
      style={styles.buttons}
    />
        <Button
      title="Go to Square Screen Page Demo"
      onPress={() => navigation.navigate("Square")}
      style={styles.buttons}
    />
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttons: {
    fontSize: 20,
    color: "blue",
    backgroundColor: "grey"
  }
});

export default HomeScreen;
