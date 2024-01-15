import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { Colors } from "../constants/styling";
import CardHeadLine from "../components/CardHeadLine";
import EndRoundButton from "../components/EndRoundButton";
import GameAnswerWrong from "../components/GameAnswerWrong";
import GameAnswer from "../components/GameAnswer";
import { putGameAfterRound } from "../util/ApiCalls";


function GameConfirmScoreScreen({ route, navigation }) {
  const [score, setScore] = useState(0);
  const [wrongChecked, setWrongChecked] = useState(false);
  const [loading, setLoading] =  useState(false)

  const { selectedAnswers } = route.params;
  const { game } = route.params;
  const { activeCard } = route.params;
  const { isWrongChecked } = route.params;
  const {prevScore} = route.params

  useEffect(() => {
    
    setWrongChecked(isWrongChecked);
    setScore(prevScore)

  },[]);

  async function onPressRoundEnd(){
    setLoading(true);
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

    await putGameAfterRound(game);

    if (!gameOver) {
        navigation.navigate("GameScoreScreen", {
            gameId: game.id,
        });
      } else {
        navigation.navigate("GameOverScreen", {
          gameId: game.id,
        });
      }
  }

  function incrementScore(isChecked) {
    setScore((prevScore) => (isChecked ? prevScore + 1 : prevScore - 1));
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
        isCheckedBefore={cardToRender.item.checked}
      />
    );
  }

  if(loading){
    return (
        <View style={styles.mainView}>
          <ActivityIndicator size={"large"} />
        </View>
      );
  }

  return (
    <View style={styles.mainView}>
        <Text style={styles.textStyle}>Verificer runde</Text>
   

      <Text style={styles.textStyle}>{game.currentTeam} får {score} point</Text>
      <EndRoundButton text={"Afslut Runde"} onPress={onPressRoundEnd}/>
      <CardHeadLine
        category={activeCard.categoryId}
        cardTitle={activeCard.title}
      />
      <View style={styles.allAnswers}>
        <GameAnswerWrong
          wrongAnswer={activeCard.wrongAnswer}
          onPress={handleWrongChecked}
          wrongChecked={wrongChecked}
        />
        <FlatList data={selectedAnswers} renderItem={renderAnswer} />
      </View>
    </View>
  );
}

export default GameConfirmScoreScreen;

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.textPrimaryColor,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
  mainView: {
    marginTop: 26,
    alignItems: "center",
    height: "100%",
    flex: 1,
  },
});
