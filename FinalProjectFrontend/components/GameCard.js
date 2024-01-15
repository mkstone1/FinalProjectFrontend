import { View, StyleSheet, FlatList, Text } from "react-native";
import { Colors } from "../constants/styling";
import CardHeadLine from "./CardHeadLine";
import GameAnswerWrong from "./GameAnswerWrong";
import { useState } from "react";
import BlueButtonForGameCard from "./BlueButtonForGameCard";
import Timer from "./Timer";
import GameAnswer from "./GameAnswer";
import { useNavigation } from "@react-navigation/native";
import EndRoundButton from "./EndRoundButton";

function GameCard({ card, game }) {
  const navigate = useNavigation();
  const [roundStarted, setRoundStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongChecked, setWrongChecked] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const activeCard = card[0];

  async function onTimerEnd() {
    const answersWithCheckedStatus = activeCard.answers.map((answer) => ({
      ...answer,
      checked: selectedAnswers.some(
        (selectedAnswer) => selectedAnswer.id === answer.id
      ),
    }));

    navigate.navigate("GameConfirmScoreScreen", {
      game: game,
      selectedAnswers: answersWithCheckedStatus,
      isWrongChecked: wrongChecked,
      activeCard: activeCard,
      prevScore: score,
    });
  }

  function onRoundStart() {
    setRoundStarted(true);
  }

  async function incrementScore(isChecked, answer) {
    setScore((prevScore) => (isChecked ? prevScore + 1 : prevScore - 1));
    if (isChecked) {
      setSelectedAnswers((prevAnswers) => [...prevAnswers, answer]);
    } else {
      setSelectedAnswers((prevAnswers) =>
        prevAnswers.filter((prevAnswer) => prevAnswer !== answer)
      );
    }
  }

  async function handleWrongChecked() {
    setWrongChecked((prevWrongChecked) => {
      const newWrongChecked = !prevWrongChecked;
      setScore((prevScore) =>
        newWrongChecked ? prevScore - 2 : prevScore + 2
      );

      return newWrongChecked;
    });
  }

  function renderAnswer(cardToRender) {
    return (
      <GameAnswer
        cardToRender={cardToRender.item}
        incrementScore={incrementScore}
      />
    );
  }

  return (
    <View style={styles.mainView}>
      <CardHeadLine
        category={activeCard.categoryId}
        cardTitle={activeCard.title}
      />
      <EndRoundButton text={"Afslut Runde"} onPress={onTimerEnd} />
      {!roundStarted ? (
        <BlueButtonForGameCard text={"Start Runde"} onPress={onRoundStart} />
      ) : (
        <Timer onTimerEnd={onTimerEnd} roundTime={game.roundLength} />
      )}

      <View style={styles.allAnswers}>
        <GameAnswerWrong
          wrongAnswer={activeCard.wrongAnswer}
          onPress={handleWrongChecked}
          wrongChecked={wrongChecked}
        />
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
    flex: 1,
  },

  allAnswers: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 15,
    backgroundColor: Colors.backgroundSecondaryColor,
  },
  textStyle: {
    color: Colors.textPrimaryColor,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  blueButton: {
    width: 300,
  },
});
