import { View, StyleSheet, FlatList, Text } from "react-native";
import { Colors } from "../constants/styling";
import CardHeadLine from "./CardHeadLine";
import HeadLine from "./HeadLine";
import Answer from "./Answer";
import AnswerWrong from "./AnswerWrong";
import { useState } from "react";
import BlueButton from "./BlueButton";
import BlueButtonForGameCard from "./BlueButtonForGameCard";
function GameCard({ card }) {
  const activeCard = card[0];

  function renderAnswer(cardToRender) {
    return <Answer cardToRender={cardToRender.item} />;
  }

  return (
    <View style={styles.mainView}>
      <Text style={styles.textStyle}>00:30</Text>
      <CardHeadLine
        category={activeCard.categoryId}
        cardTitle={activeCard.title}
        
      />
    
        <BlueButtonForGameCard text={"Start runde"} />

      <View style={styles.allAnswers}>
        <AnswerWrong wrongAnswer={activeCard.wrongAnswer} />
        <FlatList data={activeCard.answers} renderItem={renderAnswer} />
      </View>
    </View>
  );
}

export default GameCard;

const styles = StyleSheet.create({
  mainView: {
    marginTop: 26,
    alignItems: "center",
    height: "100%",
    flex:1,
  },

  allAnswers: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderRadius: 10,
    paddingVertical: 15,
    backgroundColor: Colors.backgroundSecondaryColor,
  },
  textStyle: {
    color: Colors.textPrimaryColor,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  blueButton:{
    width:300,
  }
});
