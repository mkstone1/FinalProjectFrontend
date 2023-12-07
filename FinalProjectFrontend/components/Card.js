import {
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import { Colors } from "../constants/styling";
import CardHeadLine from "./CardHeadLine";
import HeadLine from "./HeadLine";
import Answer from "./Answer";
import AnswerWrong from "./AnswerWrong";
import { useState } from "react";

function Card({ card }) {
  const activeCard = card[0];

  function renderAnswer(cardToRender) {
    return (
       <Answer cardToRender={cardToRender.item}/>
    );
  }

  return (
    <View style={styles.mainView}>
    
      <CardHeadLine
        category={activeCard.categoryId}
        cardTitle={activeCard.title}
      />
      <View style={styles.allAnswers}>
      <AnswerWrong wrongAnswer={activeCard.wrongAnswer} />
        <FlatList data={activeCard.answers} renderItem={renderAnswer} />
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  mainView: {
    marginTop: 26,
    alignItems: "center",
    height: "100%"
  },

  allAnswers: {
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    borderRadius: 10,
    paddingVertical: 15,
    backgroundColor: Colors.backgroundSecondaryColor,
    height:"85%"
  },
});
