import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Colors } from "../constants/styling.js";

const CategoryTile = ({ title, onPress }) => {
  return (

    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.viewStyle, styles.pressed] : styles.viewStyle
      }
      onPress={onPress}
    >
      
        <Text style={styles.textStyle}>{title}</Text>
   
    </Pressable>
 
  );
};

export default CategoryTile;

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.textPrimaryColor,
    fontSize: 24,
    fontWeight: "bold",
  },
  viewStyle: {
    width: "40%",
    height: 150,
    marginTop: 30,
    marginLeft: 20,

    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.listItemPrimaryColor,
  },
  pressed: {
    opacity: 0.5,
  },
});
