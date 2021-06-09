import React from 'react';
import { Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';

const GameOverScreen=({rounds,userChoice,restartGame})=>{
    return <View style={styles.container}>
        <Image style={{height:60,width:'100%'}} source={require('../assets/images/game_over.png')}/>
        <Card style={{padding:10}}>
        <Text style={styles.text}>That's it, it's OVER!</Text>
        
        
        <Text style={styles.text}>Your Guess was :{userChoice}</Text>
        <Text style={styles.text}>Computer took {rounds} no.of rounds to guess.</Text>
        <Button onPress={restartGame} title="Restart Game" />
        </Card>
    </View>
}

export default GameOverScreen;

const styles=StyleSheet.create({
    container:{
        height:'100%',
        flexDirection:'column',
       top:'30%',
        alignItems:'center',
        
    },
    text:{
        color:Colors.text1,
        marginVertical:5,
        paddingHorizontal:10,
        fontSize:20
    }
})