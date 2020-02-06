import React, {useState} from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;


const SquareScreen = () => {
  const [redColor, setRed] = useState(0)
  const [greenColor, setGreen] = useState(0)
  const [blueColor, setBlue] = useState(0)

  return <View>
  <Text>this is the screen</Text>
  <ColorCounter 
    color='Red' 
    value={redColor} 
    more={() => {
      setRed(redColor + COLOR_INCREMENT);
    }}
    less={() => {
      setRed(redColor - COLOR_INCREMENT);
    }}
    />
  <ColorCounter 
    color='Green' 
    value={greenColor}    
    more={() => {
      setGreen(greenColor + COLOR_INCREMENT);
    }}
    less={() => {
      setGreen(greenColor - COLOR_INCREMENT);
    }}
    />
  <ColorCounter 
    color='Blue' 
    value={blueColor}     
    more={() => {
      setBlue(blueColor + COLOR_INCREMENT);
    }}
    less={() => {
      setBlue(blueColor - COLOR_INCREMENT);
    }}
    />
  <View style={{height: 200, width: 200, backgroundColor: `rgb(${redColor}, ${greenColor}, ${blueColor})`}}>

  </View>
  </View>
};

export default SquareScreen;