import React, { useReducer } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 20;

const reducer = (state, action) => {
  // state === { red:number, green:number, blue:number }
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }

  switch(action.type){
    case('change_red'):
      // NEVER DO THIS: state.red = state.red - 15;
      // Instead this creates a NEW object that will replace the entire state object and not adjust it.
      return (state.red + action.payload > 255 || state.red + action.payload < 0) 
        ? state 
        : { ...state, red: state.red + action.payload };
    case('change_green'):
      return (state.green + action.payload > 255 || state.green + action.payload < 0) 
        ? state 
        : { ...state, green: state.green + action.payload };
    case('change_blue'):
      return (state.blue + action.payload > 255 || state.blue + action.payload < 0) 
        ? state 
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {

const [state, dispatch] = useReducer(reducer, { red:0, green:0, blue:0 })
const { red, green, blue } = state;

  return (
    <View>
      <Text>this is the screen</Text>
      <ColorCounter
        color="Red"
        value={red}
        more={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT})}
        less={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT})}
      />
      <ColorCounter
        color="Green"
        value={green}
        more={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT})}
        less={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT})}
      />
      <ColorCounter
        color="Blue"
        value={blue}
        more={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT})}
        less={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      ></View>
    </View>
  );
};

export default SquareScreen;
