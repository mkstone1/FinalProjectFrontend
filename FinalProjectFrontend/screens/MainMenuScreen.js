import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Colors } from "../constants/styling.js";
import MainMenuTile from "../components/MainMenuTile.js";
import HeadLine from "../components/HeadLine.js";
import {
  postQuickStartGame,
  postQuickStartGameRandom,
} from "../util/ApiCalls.js";
import { useState } from "react";

function MainMenuScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  function pressHandlerSeeQuestions() {
    navigation.navigate("CategoriesScreen");
  }

  async function pressHandlerQuickStart() {
    setLoading(true);
    const gameId = await postQuickStartGame();
    setLoading(false);
    navigation.navigate("GameScoreScreen", {
      gameId: gameId,
    });
  }

  async function pressHandlerQuickStartRandom() {
    setLoading(true);
    const gameId = await postQuickStartGameRandom();
    setLoading(false);
    navigation.navigate("GameScoreScreen", {
      gameId: gameId,
    });
  }
  function pressHandlerOptionScreen() {
    navigation.navigate("GameOptionsScreen");
  }


  if (loading) {
    return (
      <View style={styles.mainView}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <View style={styles.mainView}>
      <Text style={styles.headline}>Mimik</Text>
      <View style={styles.view}>
        <MainMenuTile
          text={"Hurtig Start - Alle kort - 2 hold til 20 point"}
          onPress={pressHandlerQuickStart}
        />
        <MainMenuTile
          text={"Hurtig Start- Tilfældige kort - 2 hold til 20 point"}
          topMargin={true}
          onPress={pressHandlerQuickStartRandom}
        />
        <MainMenuTile
          text={"Start med opsætning"}
          topMargin={true}
          onPress={pressHandlerOptionScreen}
        />
        <MainMenuTile
          text={"Se spørgsmål"}
          onPress={pressHandlerSeeQuestions}
          topMargin={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headline: {
    color: Colors.textPrimaryColor,
    fontSize: 40,
    fontStyle: "italic",
    marginBottom: 25,
    fontWeight: "bold",
  },
  view: {
    alignItems: "center",
    width: "95%",
    height: "80%",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: Colors.backgroundSecondaryColor,
  },
  mainView: {
    marginTop: 25,
    alignItems: "center",
    height: "100%",
  },
});

export default MainMenuScreen;
