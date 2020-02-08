import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 20;

const SquareScreenState = () => {
  const [redColor, setRed] = useState(0);
  const [greenColor, setGreen] = useState(0);
  const [blueColor, setBlue] = useState(0);

  setColor = (color, change) => {
    switch (color) {
      case "red":
        (redColor + change > 225 || redColor + change < 0) ? null : setRed(redColor + change);
        return;
      case 'green':
        (greenColor + change > 225 || greenColor + change < 0) ? null : setGreen(greenColor + change);
        return;
      case 'blue':
        (blueColor + change > 225 || blueColor + change < 0) ? null : setBlue(blueColor + change);
        return;
      default: return;
    }
  };

  return (
    <View>
      <Text>this is the screen</Text>
      <ColorCounter
        color="Red"
        value={redColor}
        more={() => setColor("red", COLOR_INCREMENT)}
        less={() => setColor("red", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Green"
        value={greenColor}
        more={() => setColor("green", COLOR_INCREMENT)}
        less={() => setColor("green", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        value={blueColor}
        more={() => setColor("blue", COLOR_INCREMENT)}
        less={() => setColor("blue", -1 * COLOR_INCREMENT)}
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${redColor}, ${greenColor}, ${blueColor})`
        }}
      ></View>
    </View>
  );
};

export default SquareScreenState;