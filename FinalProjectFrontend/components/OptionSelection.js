import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Colors } from "../constants/styling";
import OptionSelectionPressable from "./OptionSelectionPressable";

function OptionSelection({ optionTitle, options, onSelect, defaultOption }) {
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
          <OptionSelectionPressable
          text={option}
          isSelected={selected === option}
          onPress={() => handleOptionPress(option)}
          />
        ))}
      </View>
    </View>
  );
}

export default OptionSelection;

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
    width: 300,
  },
  view: {
    alignItems: "center",
    marginBottom: 50,
  },
});
