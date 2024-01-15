import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Colors } from "../constants/styling";

function OptionSelectionTextPressable({ text, isSelected, onPress }) {
  return (
    <View>
      <Pressable
   
        style={({ pressed }) =>
          pressed ? [styles.viewStyle, styles.pressed] : [styles.viewStyle, isSelected && styles.selected]
        }
        onPress={onPress}
      >
        <Text style={styles.textStyle}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default OptionSelectionTextPressable;

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.textPrimaryColor,
    fontSize: 33,
    fontWeight: "bold",

  },
  viewStyle: {
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    height:80,
    width:155,
    
  },
  pressed: {
    opacity: 0.5,
  },
  selected:{
    backgroundColor: Colors.listItemPrimaryColor,
  }
});
