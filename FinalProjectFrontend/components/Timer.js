import { Text, StyleSheet } from "react-native";
import { Colors } from "../constants/styling";
import { useEffect, useState } from "react";

function Timer({ roundTime, onTimerEnd }) {
  const [timeRemaining, setTimeRemaining] = useState(roundTime);

  useEffect(() => {
    let interval;
    if (timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      onTimerEnd();
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <Text style={styles.textStyle}>{`${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`}</Text>
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
