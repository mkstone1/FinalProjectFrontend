import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../constants/styling.js";

function MainMenuTile({ text, onPress, topMargin }) {
  return (
    <Pressable
    style={({pressed}) => 
    pressed ? [styles.viewStyle, styles.pressed] : [styles.viewStyle, topMargin && styles.topMargin]}
    onPress={onPress}>
        
    <View>
        
      <Text style={styles.textStyle}>{text}</Text>
    </View>
    </Pressable>
  );
}

export default MainMenuTile;

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.textPrimaryColor,
    fontSize: 24,
    fontWeight: "bold",
  },
  viewStyle:{
    
    width:"85%",
    height: "25%",
    paddingLeft:15,
    borderRadius:10,
    justifyContent: "center",
    backgroundColor:Colors.listItemPrimaryColor
  },
  pressed:{
    opacity:0.5,
  },
  topMargin:{
    marginTop:"6%",
  }
});
