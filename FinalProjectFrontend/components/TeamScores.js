import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/styling.js";

function TeamScores(scores) {

   const scoreList = scores.scores

  return (
    <View> 
      {scoreList.map((score, index) => (
        <View key={index} style={styles.scoreItem}>
       
          <Text style={styles.textStyle}>{score.name}: {score.score}</Text>
        </View>
      ))}

    </View>
  )
}

export default TeamScores

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