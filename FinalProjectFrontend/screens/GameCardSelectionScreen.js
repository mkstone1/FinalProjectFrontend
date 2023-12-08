import { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, View, StyleSheet } from "react-native";
import { getCardsWithCategoryIdFromCosmos } from "../util/ApiCalls";
import CardTitleTile from "../components/CardTitleTile";
import { Colors } from "../constants/styling";
import HeadLine from "../components/HeadLine";

function GameCardSelectionScreen({route, navigation}) {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const categoryId = route.params.categoryId;
    const gameId = route.params.gameId;
  
    async function getCards() {
      const cardsFromDb = await getCardsWithCategoryIdFromCosmos(categoryId);
      setCards(cardsFromDb);
      setLoading(false);
    }
  
    useEffect(() => {
      getCards();
    }, []);
  
    function renderCardTitle(card) {
      return (
        <CardTitleTile
          text={card.item.title}
          onPress={() => pressHandler(card)}
        />
      );
    }
  
    function pressHandler(card) {
      navigation.navigate("GameCardScreen", {
        cardId: card.item.id,
        gameId: gameId
      });
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
        <HeadLine text={"Vælg spørgsmål"} />
        <View style={styles.view}>
          <FlatList data={cards} renderItem={renderCardTitle} />
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      marginTop: 25,
      alignItems: "center",
    },
    headline: {
      color: Colors.textPrimaryColor,
      fontSize: 24,
      marginBottom: 30,
      fontWeight: "bold",
    },
    view: {
      flex:1,
      alignItems: "center",
      width: "90%",
      borderRadius: 10,
      paddingBottom: 30,
      backgroundColor: Colors.backgroundSecondaryColor,
    },
  });
  
export default GameCardSelectionScreen
