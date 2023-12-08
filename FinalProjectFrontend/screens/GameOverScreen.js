import { StyleSheet, ActivityIndicator, View, Text } from "react-native";
import { Colors } from "../constants/styling.js";
import { useEffect, useState } from "react";
import { getGameFromGameId } from "../util/ApiCalls.js";
import BlueButton from "../components/BlueButton.js";
import TeamScores from "../components/TeamScores.js";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";

function GameOverScreen({route, navigation}) {
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true);

  const gameId = route.params.gameId;

  async function getGame() {
    const gameFromDb = await getGameFromGameId(gameId);
    setGame(gameFromDb);
    setLoading(false);
  }

  async function handlePress() {
    navigation.navigate("MainMenuScreen");
  }

  useEffect(() => {
    getGame();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getGame();
    }, [])
  );

  if (loading) {
    return (
      <View style={styles.mainView}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.view}>
        <Text style={styles.headline}>Spillet er over</Text>
        <Text style={styles.headline}>Scoren er: </Text>
        <View style={styles.score}>
          <TeamScores scores={game.teamScore} />
        </View>
        <BlueButton text={"Afslut"} onPress={handlePress} />
      </View>
    </View>
  );
}

export default GameOverScreen;
const styles = StyleSheet.create({
  mainView: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  headline: {
    color: Colors.textPrimaryColor,
    fontSize: 35,
    marginBottom: 30,
    fontWeight: "bold",
    marginTop: 30,
  },
  view: {
    alignItems: "center",
    width: "80%",
    height: "95%",
    borderRadius: 10,
    paddingBottom: 30,

    backgroundColor: Colors.backgroundSecondaryColor,
  },
  score: {
    marginBottom: 50,
  },
  currentTeam: {
    color: Colors.textPrimaryColor,
    fontSize: 24,
  },
});
