import { ActivityIndicator, View, StyleSheet } from "react-native";

import { useEffect, useState } from "react";
import { getCardWithCardIdFromCosmos, getGameFromGameId } from "../util/ApiCalls";
import Card from "../components/Card";
import GameCard from "../components/GameCard";
import { useFocusEffect } from "@react-navigation/native";

function GameCardScreen({route, navigation}) {
    const [card, setCard] = useState([]);
    const [game, setGame] = useState([]);
    const [loading, setLoading] = useState(true);

    const gameId = route.params.gameId;
  
    const cardId = route.params.cardId;


    async function getData() {
      const card = await getCardWithCardIdFromCosmos(cardId);
      const game = await getGameFromGameId(gameId)
      setCard(card);
      setGame(game);
      setLoading(false);
    }

    useEffect(() => {
      getData();
    }, []);


  
    if (loading) {
      return (
        <View style={styles.mainView}>
          <ActivityIndicator size={"large"} />
        </View>
      );
    }

    return <GameCard card={card} game={game} />;
  }
  
 
    export default GameCardScreen
  
  const styles = StyleSheet.create({
    mainView: {
      marginTop: 100,
      alignItems: "center",
      height: "100%",
    },
  });
  
