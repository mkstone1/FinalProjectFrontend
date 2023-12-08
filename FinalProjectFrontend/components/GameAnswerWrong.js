import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../constants/styling";

function GameAnswerWrong({ wrongAnswer, onPress, wrongChecked }) {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.answer}>
        <Text style={styles.headline}>{wrongAnswer}</Text>
        {wrongChecked ? (
          <View style={styles.checkedCircle}>
            <Text style={styles.checkedText}>-2</Text>
          </View>
        ) : (
          <Text style={styles.circle}></Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default GameAnswerWrong;

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
    color: Colors.wrongAnswerText,
    fontSize: 17,
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
    backgroundColor: Colors.wrongAnswerText,
    color: Colors.textPrimaryColor,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 3,
  },
  checkedText: {
    color: Colors.textPrimaryColor,
    fontSize: 20,
  },
});
