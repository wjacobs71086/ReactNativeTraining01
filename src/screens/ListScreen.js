import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";


const ListScreen = () => {
  const family = [
    {name: 'Wesley', age: 33},
    {name: 'Brittany', age: 31},
    {name: 'Humphrey', age: 4},
  ]

  return (
    <View>
    <Text> This is my family which I love greatly.</Text>
    <FlatList
      showsVerticalScrollIndicator
      keyExtractor={(family) => family.name } 
      data={family}
      renderItem={({item}) => {
        if(item.name == family[family.length -1].name){
        return <Text style={styles.textStyle}> and {item.name} - Age {item.age}.</Text>
        }
      return <Text style={styles.textStyle}>{item.name} - Age {item.age},</Text>
    }}/>
</View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
  }
);

export default ListScreen;
