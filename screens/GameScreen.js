import React, { useState,useRef, useEffect } from "react";
import { Button } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import NumberBox from "../components/NumberBox";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../constants/Colors";
import { Alert } from "react-native";

const randomNumberGenerator = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return randomNumberGenerator(min, max, exclude);
  } else {
    return randomNum;
  }
};

const GameScreen = ({ userChoice,onGameOver }) => {
  //generating random guess my computer
  const [currentGuess, setcurrentGuess] = useState(
    randomNumberGenerator(1, 100, userChoice)
  );

  const [rounds,setRounds]=useState(0);

  //for holding current guess whether it is low or high
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  //game over condition check on each render
  useEffect(()=>{

    if(currentGuess===userChoice){
      console.log('game over');
      onGameOver(rounds);
    }
  },[currentGuess,userChoice,onGameOver])
  //generate next guess based on lower or larger num
  const nextGuessGenerator = (type) => {
    
    if (
      (type == "smaller" && currentGuess < userChoice) ||
      (type == "larger" && currentGuess > userChoice)
    ) {
      //user is lying
      Alert.alert("That's a lie!", "Please don't be oversmart :-)", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (type === "smaller") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const newGuess=randomNumberGenerator(currentLow.current,currentHigh.current,currentGuess);
    setcurrentGuess(newGuess);
    setRounds(c_rounds=>c_rounds+1);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.guessContainer}>
        <Text style={styles.guessText}>Computer's Guess</Text>
        <NumberBox>{currentGuess}</NumberBox>
        <View style={styles.buttonContainer}>
          <Button
            type="outline"
            style={styles.buttons}
            icon={
              <Icon
                name="backward"
                size={18}
                color={Colors.text1}
                style={{ padding: 4 }}
              />
            }
            title="SMALLER"
            onPress={() => {
              nextGuessGenerator("smaller");
            }}
          />
          <Button
            type="outline"
            icon={
              <Icon
                name="forward"
                size={18}
                color={Colors.text1}
                style={{ padding: 4 }}
              />
            }
            iconRight
            title="LARGER"
            onPress={() => {
              nextGuessGenerator("larger");
            }}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    top: "30%",
    marginHorizontal: 30,
  },
  guessContainer: {
    width: "100%",
    marginVertical: 20,
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: Colors.card_background,
  },
  guessText: {
    color: Colors.text1,
    fontSize: 18,
    marginBottom: 10,
  },
});

export default GameScreen;
