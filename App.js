import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Category from './src/components/category'
import {Provider } from "react-redux"
import store from './src/store/index'
import Products from './src/components/product';
import { style } from 'styled-system';

export default function App() {
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    image: {
      flex: 1,
      width: 500,
      height: 720,
      resizeMode: "cover",
      // opacity: 0.2,
      justifyContent: "center"
    },
    text: {
      color: "black",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#ccc",
  
    },
    

 
  });


  return (

    
    <View style={styles.container}>
        <Provider store={store}>
      <ImageBackground source="https://wallpaper.dog/large/9592.jpg" style={styles.image}>
      <Text style={styles.text}> Store </Text>
      <Category />
      <Products/>
      <StatusBar style="auto" />
    </ImageBackground>
    </Provider>
    </View>
  );
}
