import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../constants/styling";

function Answer({ cardToRender }) {
  const [isChecked, setIsChecked] = useState(false);

  function handlePress() {
    setIsChecked(!isChecked);
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.answer}>
        <Text style={styles.headline}>{cardToRender.answer}</Text>
        {isChecked ? (
          <View style={styles.checkedCircle}>
            <Text style={styles.checkedText}>1</Text>
          </View>
        ) : (
          <Text style={styles.circle}></Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default Answer;

const styles = StyleSheet.create({
  answer: {
    backgroundColor: Colors.listItemPrimaryColor,
    borderRadius: 15,
    width: 280,
    height: 65,
    marginBottom: 10,
    justifyContent: "space-between",
    paddingLeft: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  headline: {
    color: Colors.textPrimaryColor,
    fontSize: 27,
    fontWeight: "bold",
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 15,
    borderColor: Colors.circleBorderColor,
    borderWidth: 2,
  },
  checkedCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 15,
    backgroundColor: Colors.circleGreenCheckedColor,
    color: Colors.textPrimaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
  checkedText: {
    color : Colors.textPrimaryColor,
    fontSize: 20,

  }
});