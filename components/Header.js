import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
}

export default Header;

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:90,
        paddingTop:30,
        backgroundColor:Colors.header,
        alignItems:"center",
        justifyContent:"center"    
    },
    headerText:{
        color:Colors.text1,
        fontSize:20,
        fontFamily:'open-sans-bold'
    }
});