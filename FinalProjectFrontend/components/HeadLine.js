import { StyleSheet, Text } from "react-native";
import { Colors } from "../constants/styling";

function HeadLine({ text }) {
  return <Text style={styles.textStyle}>{text}</Text>;
}

export default HeadLine;

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.textPrimaryColor,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
