import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pressable, SafeAreaView, StyleSheet } from "react-native";
import { getRemoteData } from "../store/myKitchen";
import { ACTIVE } from "../store/myKitchen";
import {
  Menu,
  Divider,
  HamburgerIcon,
  Center,
  NativeBaseProvider,
} from "native-base";

//   import {View, FlatList, Text} from 'react-native'
import { style, styles, zIndex } from "styled-system";

const Category = (props) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      MyCategory: state.Category,
    };
  });

  useEffect(() => {
    dispatch(getRemoteData());
  }, []);

  const styles = StyleSheet.create({
    BMenu: {
      width: 30,
      height: 20,
      marginLeft: 450,
      marginTop: 20,
      color: "white",
    },
    menu: {
      marginLeft: 320,
    },
  });

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Menu
          style={styles.menu}
          trigger={(triggerProps) => {
            return (
              <Pressable {...triggerProps}>
                <HamburgerIcon style={styles.BMenu} />
              </Pressable>
            );
          }}
        >
          {state.MyCategory.categories.map((category, idx) => {
            return (
              <Menu.Item onPress={() => dispatch(ACTIVE(category))}>
                {category}
              </Menu.Item>
            );
          })}
        </Menu>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Category;
