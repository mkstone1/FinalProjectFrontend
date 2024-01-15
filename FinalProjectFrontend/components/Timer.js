import { Text, StyleSheet } from "react-native";
import { Colors } from "../constants/styling";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";

const soundObject = new Audio.Sound();

function Timer({ roundTime, onTimerEnd }) {
  const [timeRemaining, setTimeRemaining] = useState(roundTime);
  const [countdownSound, setSound] = useState();

  async function playCountdownSound() {
    const  { sound }  = await Audio.Sound.createAsync(
      require("../assets/countdown2.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }

  async function playRoundoverSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/bell.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    let interval;
    
    if (timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
        if (timeRemaining <= 6 && timeRemaining >= 1) {
          playCountdownSound();
        }
        if (timeRemaining ==1){
          playRoundoverSound();
        }
      }, 1000);
    } else {
      onTimerEnd();
    }

    return () => {
      soundObject.unloadAsync();
      clearInterval(interval);
    };
  }, [timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <Text style={styles.textStyle}>{`${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</Text>
  );
}

export default Timer;

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.textPrimaryColor,
    fontSize: 24,
    fontWeight: "bold",
  },
});