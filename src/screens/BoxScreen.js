import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle1}>1</Text>
      <Text style={styles.textStyle2}>2</Text>
      <Text style={styles.textStyle3}>3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle : {
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  textStyle1: {
    color: 'blue',
    margin: 5,
    borderWidth: 2,
    borderColor: 'green',
    padding: 2,
    backgroundColor: 'green',
    alignSelf: 'flex-start',
  },
  textStyle2: {
    color: 'blue',
    margin: 5,
    borderWidth: 2,
    borderColor: 'green',
    padding: 2,
    backgroundColor: 'blue',
    alignSelf: 'flex-end',
  },
  textStyle3: {
    color: 'blue',
    margin: 5,
    borderWidth: 2,
    borderColor: 'green',
    padding: 2,
    backgroundColor: 'red',
    alignSelf: 'flex-start',
  },
})

export default BoxScreen;
