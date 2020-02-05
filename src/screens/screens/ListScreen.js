import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";


const ListScreen = () => {
  const family = [
    {name: 'Wesley'},
    {name: 'Brittany'},
    {name: 'Humphrey'},
  ]

  return (
    <View>
    <Text> This is my family which I love greatly.</Text>
    <FlatList
      keyExtractor={(family) => {
        family.key = `${Math.random()}`
        return family.key;
      } } 
      data={family}
      renderItem={({item}) => {
        if(item.name == family[family.length -1].name){
        return <Text> and {item.name}.</Text>
        }
      return <Text>{item.name},</Text>
    }}/>
</View>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
