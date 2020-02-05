/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = props => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>
        Current Count
        {counter}
      </Text>
      <Button title="Increase Count" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease Count" onPress={() => setCounter(counter - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
