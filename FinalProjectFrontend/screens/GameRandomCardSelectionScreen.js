import React, { useState, useEffect } from "react";
import { StyleSheet, ActivityIndicator, View, Text, FlatList } from "react-native";
import { Colors } from "../constants/styling";
import { getRandomCardsFromCosmos } from "../util/ApiCalls.js";
import RandomCardTile from "../components/RandomCardTile.js";
import HeadLine from "../components/HeadLine.js";

function GameRandomCardSelectionScreen({ route, navigation }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);


  const gameId = route.params.gameId;

  async function getRandomCards() {
    const cardsFromDb = await getRandomCardsFromCosmos();
    setCards(cardsFromDb);
    setLoading(false);
  }

  useEffect(() => {
    getRandomCards();
  }, []);

  function pressHandler(card) {
    navigation.navigate("GameCardScreen", {
      cardId: card.item.id,
      gameId: gameId
    });
  }

  function renderCards(card) {
    return <RandomCardTile card={card} onPress={() =>pressHandler(card)}/>;
  }

  if (loading) {
    return (
      <View style={styles.mainView}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  } else {
    return (
      <View style={styles.mainView}>
        <HeadLine text={"Vælg Kategori"} />
        <View style={styles.view}>
          <FlatList data={cards} renderItem={renderCards} numColumns={2} />
        </View>
      </View>
    );
  }
}

export default GameRandomCardSelectionScreen;

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.textPrimaryColor,
    fontSize: 24,
    fontWeight: "bold",
  },
  mainView: {
    marginTop: 25,
    alignItems: "center",
    height: "100%",
  },
  view: {
    alignItems: "center",
    width: "95%",
    borderRadius: 10,
    paddingBottom: 30,
    backgroundColor: Colors.backgroundSecondaryColor,
  },
});
