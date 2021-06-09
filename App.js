
import React,{useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';

import AppLoading from 'expo-app-loading';

import * as Font from 'expo-font';

const fetchFonts=()=>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}


export default function App() {

  const [userNum,setUserNum]=useState();
  const [noOfRounds,setNoOfRounds]=useState(0);
  const [loaded,setLoaded]=useState(false);

  if(!loaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>setLoaded(true)} onError={(err)=>console.log(err)}/>
  }

  const startNewGame=()=>{
    setNoOfRounds(0);
    setUserNum(null);
  }

  const startGameHandler=(userChoice)=>{
    setUserNum(userChoice);
    setNoOfRounds(0);
  }

  //game over handler
  const gameOverHandler= num_rounds=>{
    setNoOfRounds(num_rounds);
    //screenContent=<GameOverScreen/>
  }
  

  let screenContent=<StartScreen gameHandler={startGameHandler}/>;

  if(userNum && noOfRounds==0){
    screenContent=<GameScreen userChoice={userNum} onGameOver={gameOverHandler}/>;
  }
  else if(noOfRounds>0){
    screenContent=<GameOverScreen rounds={noOfRounds} userChoice={userNum} restartGame={startNewGame}/>
  }

  
  return (
    <View style={styles.container}>
      <Header title="Guess Game"/>
      {screenContent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:Colors.main_background
  },
});
