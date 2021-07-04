import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, FlatList, Center, NativeBaseProvider } from "native-base";
import { styles } from "styled-system";
import { StyleSheet, Image, Text } from "react-native";
import { PUT, updateRemoteData } from "../store/myKitchen";

function Products(props) {
  const state = useSelector((state) => {
    return {
      Pro: state.Category.productsList,
      categories: state.Category.categories,
    };
  });

  const dispatch = useDispatch();

  const styles = StyleSheet.create({
    boxes: {
      width: 200,
      margin: "auto",
      marginTop: -300,
    },
    image: {
      flex: 1,
      width: 100,
      height: 100,
      margin: "auto",
      justifyContent: "center",
    },
    text: {
      textAlign: "center",
    },
  });

  return (
    <NativeBaseProvider>
      <FlatList
        style={styles.boxes}
        data={state.Pro}
        renderItem={({ item }) => (
          <Box px={5} py={2} rounded="md" my={0.5} bg="#ccc">
            <Image
              source={item.image}
              style={styles.image}
         
            />
            <Text style={styles.text}> {item.name} </Text>
            <Text style={styles.text}> {item.price}$</Text>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </NativeBaseProvider>
  );
}

export default Products;
