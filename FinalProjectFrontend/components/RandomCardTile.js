import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { Colors } from '../constants/styling'

function RandomCardTile({card, onPress}) {

  return (
    <Pressable
    style={({ pressed }) =>
      pressed ? [styles.viewStyle, styles.pressed] : styles.viewStyle
    }
    onPress={onPress}
  >

    <Text style={styles.textStyle}>{card.item.categoryId}</Text>
    <Text style={styles.textStyle}>{card.item.title}</Text>

    </Pressable>
  )
}

export default RandomCardTile

const styles = StyleSheet.create({
    textStyle: {
      color: Colors.textPrimaryColor,
      fontSize: 24,
      fontWeight: "bold",
      marginHorizontal:10,
    },
    viewStyle: {
      width: "43%",
      height: 180,
      marginTop: 30,
      marginLeft: 20,
  
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors.listItemPrimaryColor,
    },
    pressed: {
      opacity: 0.5,
    },
  });
  