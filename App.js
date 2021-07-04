import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView} from "react-native";
import Category from "./src/components/category";
import { Provider } from "react-redux";
import store from "./src/store/index";
import Products from "./src/components/product";
import { style } from "styled-system";
// import Cart from "./src/components/cart";

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },

    image: {
      flex: 1,
      width: 500,
      height: 720,
      resizeMode: "cover",
      justifyContent: "center",
    },
    text: {
      color: "black",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#ccc",
      marginTop: 50,
    },
  });

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <SafeAreaView>
          <ImageBackground
            source="https://wallpaper.dog/large/9592.jpg"
            style={styles.image}
          >
            <Text style={styles.text}> Store </Text>
            {/* <Cart /> */}
            <Category />
            <Products />
            <StatusBar style="auto" />
          </ImageBackground>
        </SafeAreaView>
      </Provider>
    </View>
  );
}
