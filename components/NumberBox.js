import React from 'react';
import { StyleSheet,Text } from 'react-native';
import Colors from '../constants/Colors';

const NumberBox=(props)=>{
    return <Text style={{...props.style, ...styles.number}}>{props.children}</Text>
}

export default NumberBox;

const styles=StyleSheet.create({
    number:{
        fontSize:30,
        color:Colors.text3,
        fontWeight:'bold',
        borderColor:Colors.text3,
        borderWidth:2,
        borderRadius:5,
        paddingVertical:5,
        paddingHorizontal:15
    }
})