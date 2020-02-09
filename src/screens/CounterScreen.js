/* eslint-disable react/jsx-filename-extension */
import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const INCREMENT = 3;
const DECREMENT = -3;

const reducer = ( state, action ) => {
// state === value: 0
// action === { type:'increase_value', payload: INCREMENT || -INCREMENT }

switch(action.type){
  case('increase_value'):
    return {...state, value: state.value + action.payload};
  case('decrease_value'):
    return {...state, value: state.value - action.payload};
  default:
    return state;
};
};

const CounterScreen = props => {

const [state, dispatch] = useReducer(reducer, {value: 0})

  return (
    <View>
      <Text>
        Current Count
        {state.value}
      </Text>
      <Button 
        title="Increase Count" 
        onPress={() => dispatch({type: 'increase_value', payload: INCREMENT})} 
      />
      <Button 
        title="Decrease Count" 
        onPress={() => dispatch({type: 'increase_value', payload: DECREMENT})} 
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
