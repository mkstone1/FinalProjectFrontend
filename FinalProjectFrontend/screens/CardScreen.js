import { ActivityIndicator, View, StyleSheet } from "react-native";
import { Colors } from "../constants/styling";
import HeadLine from "../components/HeadLine";
import { useEffect, useState } from "react";
import { getCardWithCardIdFromCosmos } from "../util/ApiCalls";
import Card from "../components/Card";

function CardScreen({ route, navigation }) {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);

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
  return <Card card={card} />;
}

export default CardScreen;

const styles = StyleSheet.create({
  mainView: {
    marginTop: 100,
    alignItems: "center",
    height: "100%",
  },
});
