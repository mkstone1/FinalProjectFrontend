import { View, StyleSheet, FlatList, Text } from "react-native";
import { Colors } from "../constants/styling";
import CardHeadLine from "./CardHeadLine";
import GameAnswerWrong from "./GameAnswerWrong";
import { useState } from "react";
import BlueButtonForGameCard from "./BlueButtonForGameCard";
import Timer from "./Timer";
import GameAnswer from "./GameAnswer";
import { patchGameAfterRound } from "../util/ApiCalls";
import { useNavigation } from "@react-navigation/native";
import EndRountButton from "./EndRoundButton";

function GameCard({ card, game }) {
  const navigate = useNavigation();
  const [roundStarted, setRoundStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongChecked, setWrongChecked] = useState(false);

  const activeCard = card[0];

  function renderAnswer(cardToRender) {
    return (
      <GameAnswer
        cardToRender={cardToRender.item}
        incrementScore={incrementScore}
      />
    );
  }

  async function onTimerEnd() {
    let gameOver = false;
    const updatedTeamScore = game.teamScore.map((team) => {
      if (team.name === game.currentTeam) {
        const newScore = team.score + score;
        if (newScore >= game.maxScore) {
          gameOver = true;
        }
        return { ...team, score: team.score + score };
      } else {
        return { ...team };
      }
    });

    game.teamScore = updatedTeamScore;

    if (game.currentTeam == "Hold 1") {
      game.currentTeam = "Hold 2";
    } else {
      game.currentTeam = "Hold 1";
    }

    await patchGameAfterRound(game);

    if (!gameOver) {
      navigate.navigate("GameScoreScreen", {
        gameId: game.id,
      });
    } else {
      navigate.navigate("GameOverScreen", {
        gameId: game.id,
      });
    }
  }

  function onRoundStart() {
    setRoundStarted(true);
  }

  async function incrementScore(isChecked) {
    setScore((prevScore) => (isChecked ? prevScore + 1 : prevScore - 1));
  }

  async function handleWrongChecked() {
    setWrongChecked((prevWrongChecked) => {
      const newWrongChecked = !prevWrongChecked;

      // Toggle between subtracting and adding 2 to the score
      setScore((prevScore) =>
        newWrongChecked ? prevScore - 2 : prevScore + 2
      );

      return newWrongChecked;
    });
  }

  return (
    <View style={styles.mainView}>
         <CardHeadLine
        category={activeCard.categoryId}
        cardTitle={activeCard.title}
      />
      <EndRountButton text={"Afslut Runde"} onPress={onTimerEnd} />
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
