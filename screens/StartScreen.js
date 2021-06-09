import React, { useState } from "react";
import { Button } from "react-native-elements";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import NumberBox from "../components/NumberBox";

const StartScreen = ({gameHandler}) => {
  const [inputNumber, setInputNumber] = useState("");
  const [number, setNumber] = useState("");
  const [confirmed, setconfirmed] = useState(false);

  const inputHandler = (inputText) => {
    setInputNumber(inputText.replace(/[^0-9]/g, ""));
  };

  const resetHandler = () => {
    setInputNumber("");
    setconfirmed(false);
  };

  const confirmHandler = () => {
    if (inputNumber == NaN || inputNumber <= 0 || inputNumber > 99) {
      Alert.alert('Invalid choice!','Number must be between 1 and 99',[{text:'Okay',style:'cancel',onPress:resetHandler}]);
      return;
    }
    setconfirmed(true);
    setNumber(parseInt(inputNumber));
    setInputNumber("");
  };

  let confirmedOutputBox;

  if (confirmed) {
    confirmedOutputBox = (<Card style={styles.confirmBox}>
      <Text style={styles.choiceText}>You made a Choice:</Text><NumberBox>{number}</NumberBox>
      <Button type="outline" title="START GAME" buttonStyle={styles.gameStartButton} onPress={()=>gameHandler(number)}/>
    </Card>);
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.mainContainer}>
        <Text style={styles.beginText}>Begin a new Game</Text>
        <Card style={styles.gameContainer}>
          <Text style={styles.guessText}>Guess a Number..</Text>
          <TextInput
            style={styles.inputField}
            blurOnSubmit
            keyboardType="numeric"
            maxLength={2}
            value={inputNumber}
            onChangeText={inputHandler}
          />
          <View style={styles.buttonContainer}>
            <Button
              type="outline"
              style={styles.buttons}
              icon={
                <Icon
                  name="times"
                  size={18}
                  color="orange"
                  style={{ padding: 4}}
                />
              }
              title="Clear"
              onPress={resetHandler}
            />
            <Button
              type="outline"
              icon={
                <Icon
                  name="check"
                  size={18}
                  color="green"
                  style={{ padding: 4 }}
                />
              }
              title="Confirm"
              
              onPress={confirmHandler}
            />
          </View>
        </Card>
       <View>{confirmedOutputBox}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  gameContainer: {
    width: "100%",
    marginVertical: 20,
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 10,
   
  },
  guessText: {
    fontSize: 23,
    color: Colors.text1,
  },
  beginText: {
    fontSize: 20,
    color: Colors.text1,
    textDecorationLine: "underline",
  },
  inputField: {
    fontSize: 30,
    paddingVertical: 10,
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "white",
    width: 70,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: Colors.card_background
  },
  confirmBox:{
    
    marginVertical: 20,
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.card_background,
  },
  choiceText:{
    fontSize:18,
    color:Colors.text2
  },
  gameStartButton:{
    marginVertical:10,
    
  },
});
