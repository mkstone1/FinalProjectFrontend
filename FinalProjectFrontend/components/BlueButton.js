import {
    Pressable,
    Text,
    StyleSheet
  } from "react-native";
  import { Colors } from "../constants/styling.js";


function BlueButton({text, onPress}) {


  return (
    <Pressable
    style={({ pressed }) =>
      pressed ? [styles.viewStyle, styles.pressed] : styles.viewStyle
    }
    onPress={onPress}
  >
    
      <Text style={styles.textStyle}>{text}</Text>
 
  </Pressable>
  )
}

export default BlueButton

const styles = StyleSheet.create({
    textStyle: {
      color: Colors.textPrimaryColor,
      fontSize: 24,
      fontWeight: "bold",
    },
    viewStyle: {
      width: "93%",
      height: "13%",
      marginTop: 50,
  
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors.blueButtonColor,
    },
    pressed: {
      opacity: 0.5,
    },
  });