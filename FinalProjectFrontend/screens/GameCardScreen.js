import { ActivityIndicator, View, StyleSheet } from "react-native";

import { useEffect, useState } from "react";
import { getCardWithCardIdFromCosmos } from "../util/ApiCalls";
import Card from "../components/Card";
import GameCard from "../components/GameCard";

function GameCardScreen({route, navigation}) {
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(true);

    const gameId = route.params.gameId;
  
    const cardId = route.params.cardId;


    async function getCard() {
      const card = await getCardWithCardIdFromCosmos(cardId);
      setCard(card);
      setLoading(false);
    }
    useEffect(() => {
      getCard();
    }, []);
  
    if (loading) {
      return (
        <View style={styles.mainView}>
          <ActivityIndicator size={"large"} />
        </View>
      );
    }

    return <GameCard card={card} />;
  }
  
 
    export default GameCardScreen
  
  const styles = StyleSheet.create({
    mainView: {
      marginTop: 100,
      alignItems: "center",
      height: "100%",
    },
  });
  
