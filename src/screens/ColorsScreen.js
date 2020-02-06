import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColor] = useState('');
  return <View>
    <Button title='Click for more colors' onPress={() => {
      setColor([...colors,randomRGB()])
      console.log('colors in state', colors)
      }}/>
    
    <FlatList 
      data={colors} 
      keyExtractor={(item) => item}
      renderItem={({item}) => {
      return <View style={{height: 100, width: 100, backgroundColor: item}}></View>
    }}/>
  </View>;
};

const randomRGB = () => {
  let red = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random() * 256)
  let green = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({

})
export default ColorScreen;