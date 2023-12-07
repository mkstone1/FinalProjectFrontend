import { View, Text, StyleSheet, Pressable } from "react-native";
import HeadLine from "./HeadLine"
import { Colors } from "../constants/styling";


function CardTitleTile({text , onPress}) {

  return (
    <Pressable
    style={({pressed}) => 
    pressed ? [styles.viewStyle, styles.pressed] : styles.viewStyle}
    onPress={onPress}>
        
    <View>
        
      <Text style={styles.textStyle}>{text}</Text>
    </View>
    </Pressable>
  )
}

export default CardTitleTile

const styles = StyleSheet.create({
    textStyle: {
      color: Colors.textPrimaryColor,
      fontSize: 24,
      fontWeight: "bold",
    },
    viewStyle:{
      marginTop:30,
      width:255,
      height: 100,
      paddingLeft:15,
      borderRadius:10,
      justifyContent: "center",
      backgroundColor:Colors.listItemPrimaryColor
    },
    pressed:{
      opacity:0.5,
    }
  });
  