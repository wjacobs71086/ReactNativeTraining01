import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';


const TextScreen = props => {

  const [ name, setName ] = useState('');
  const [ error, setError ] = useState('');

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput 
        style={styles.input}
        autoCapitalize="none"
        value={name}
        onChangeText={(newValue) => {
          (name.length < 5 ) ? setError('Name must be longer than 5 letters') : setError('')
          return setName(newValue);
        }}
      />
      <Text>{error}</Text>
      <Text>You entered: {name}</Text>
    </View>
    );
}
 
const styles = StyleSheet.create({
  input:{
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    height: 30,
    color: 'grey',

  }
})


export default TextScreen;