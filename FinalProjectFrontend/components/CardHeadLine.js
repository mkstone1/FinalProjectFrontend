import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/styling";


function CardHeadLine({category, cardTitle}) {
  return (
    <View style={styles.view}>
    <Text style={styles.categoryStyle}>{category}:  </Text>
    <Text style={styles.textStyle}>{cardTitle}</Text>
    </View>
  )
}

export default CardHeadLine

const styles = StyleSheet.create({
    textStyle: {
      color: Colors.textPrimaryColor,
      fontSize: 24,
    },
    categoryStyle:{
        color: Colors.textPrimaryColor,
        fontSize: 24,
        fontWeight: "bold",
    },
    view:{
        flexDirection: "row"

    }
  });
  