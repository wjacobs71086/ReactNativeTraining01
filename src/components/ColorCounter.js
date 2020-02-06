import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ColorCounter = ({color, more, less}) => {
  return <View>
    <Text>{color}</Text>
    <Button 
      title={`More ${color}`}
      onPress={()=> more()}/>
    <Button 
      title={`Less ${color}`}
      onPress={()=> less()}/>
  </View>
};



export default ColorCounter;