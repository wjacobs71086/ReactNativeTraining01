import React from 'react';
import { View, Text, StyleSheet, Image, ShadowPropTypesIOS } from 'react-native';

const ImageDetail = (props) => {
  return <View>
    <Image source={props.imageSource}/>
    <Text> {props.title} </Text>
    </View>
}

const styles = StyleSheet.create({
  image: {
    width: '100%',

  },  
});

export default ImageDetail;
