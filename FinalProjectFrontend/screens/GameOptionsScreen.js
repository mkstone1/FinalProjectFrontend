import React, { useState } from "react";
import { Text, StyleSheet, View, ActivityIndicator, ScrollView } from "react-native";
import { Colors } from "../constants/styling";
import OptionSelection from "../components/OptionSelection";
import BlueButton from "../components/BlueButton";
import { postGame } from "../util/ApiCalls";
import OptionSelectionText from "../components/OptionSelectionText";


function GameOptionsScreen({ navigation }) {
  const [time, setTimer] = useState(60);
  const [maxScore, setMaxScore] = useState(20);
  const [randomCards, setRandomCards] = useState(false)
  const [loading, setLoading] = useState(false);

  function setTimerFromPressable(time) {
    setTimer(time);
  }

  function setMaxScoreFromPressable(score) {
    setMaxScore(score);
  }

  function setRandomCardFromPressable(isRandom) {
    if(isRandom == "Vælg selv"){
      setRandomCards(false)
    }else{
      setRandomCards(true)
    }
  }


  async function onPressSaveGame() {
    setLoading(true);
    const data = {
      roundLength: time,
      maxScore: maxScore,
      withRandomCards: randomCards
    };
    const gameId = await postGame(data);

    navigation.navigate("GameScoreScreen", {
      gameId: gameId,
    });
  }

  if (loading) {
    <View>
      <ActivityIndicator size={"large"} />
    </View>;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.mainView}>

      <View>
        <View style={styles.topView}>
          <Text style={styles.headline}>Sæt Indstillinger</Text>
        
          <OptionSelection
            optionTitle={"Tid per runde i sekunder"}
            options={[45, 60, 75]}
            defaultOption={time}
            onSelect={setTimerFromPressable}
          />

          <OptionSelection
            optionTitle={"Hvad spilles der til"}
            options={[15, 20, 25]}
            defaultOption={maxScore}
            onSelect={setMaxScoreFromPressable}
          />
            <OptionSelectionText
            optionTitle={"Vælg selv eller tilfædige kort"}
            options={["Vælg selv", "Tilfældige"]}
            defaultOption={"Vælg selv"}
            onSelect={setRandomCardFromPressable}
          />
         
        </View>
      
  
      </View>
      <BlueButton text={"Start Spil"} onPress={onPressSaveGame}></BlueButton>

    </View>
    </ScrollView>
  );
}

export default GameOptionsScreen;

const styles = StyleSheet.create({
  headline: {
    color: Colors.textPrimaryColor,
    fontSize: 40,
    marginBottom: 25,
    fontWeight: "bold",
  },
  mainView: {
    marginTop: 25,
    alignItems: "center",
  },
  topView: {
    alignItems: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 80,
  },

});
