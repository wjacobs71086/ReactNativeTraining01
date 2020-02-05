import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetails';


const ImageScreen = () => {

  return <View>
    <ImageDetail 
      title='wesley' 
      imageSource={require('../../assets/wesley.jpeg')}/>
    <ImageDetail 
      title='brittany' 
      imageSource={require('../../assets/brittany.jpeg')}/>
    <ImageDetail 
      title='humphrey' 
      imageSource={require('../../assets/humphrey.jpeg')}/>
  </View>
}

const styles = StyleSheet.create({

});

export default ImageScreen;
