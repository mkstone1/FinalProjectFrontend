import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/styling.js";
import MainMenuTile from "../components/MainMenuTile.js";
import HeadLine from "../components/HeadLine.js";
import { postQuickStartGame } from "../util/ApiCalls.js";

function MainMenuScreen({ navigation }) {
  function pressHandlerSeeQuestions() {
    navigation.navigate("CategoriesScreen");
  }

  async function pressHandlerQuickStart() {
    const gameId = await postQuickStartGame();
    navigation.navigate("GameScoreScreen", {
      gameId: gameId,
    });
  }

  return (
    <View style={styles.mainView}>
      <Text style={styles.headline}>Mems-HG</Text>
      <View style={styles.view}>
        <MainMenuTile
          text={"Hurtig Start\n2 hold til 10 point"}
          onPress={pressHandlerQuickStart}
        />
        <MainMenuTile text={"Start med opsætning"} topMargin={true} />
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
    width: "90%",
    height: "60%",
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
