import React from 'react';
import { View,StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const Card = (props) => {
    return <View style={{...styles.container, ...props.style}}>
        {props.children}
    </View>
}

export default Card;

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.card_background,
        borderRadius:5,
        shadowColor: "white",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.24,
    
        elevation: 3,
    }
})