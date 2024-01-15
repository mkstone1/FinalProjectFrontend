import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Colors } from "../constants/styling";
import OptionSelectionTextPressable from "./OptionSelectionTextPressable";

function OptionSelectionText({ optionTitle, options, onSelect, defaultOption }) {
  const [selected, SetSelected] = useState(defaultOption);

  function handleOptionPress(option) {
    SetSelected(option);
    onSelect(option);
  }

  return (
    <View style={styles.view}>
      <Text style={styles.textStyle}>{optionTitle}</Text>

      <View style={styles.options}>
        {options.map((option) => (
          <OptionSelectionTextPressable
          text={option}
          isSelected={selected === option}
          onPress={() => handleOptionPress(option)}
          />
        ))}
      </View>
    </View>
  );
}

export default OptionSelectionText;

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.textPrimaryColor,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 330,
  },
  view: {
    alignItems: "center",
  },
});
