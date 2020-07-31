import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import IconArray from "./IconArray"
var expenses = null;
export default class CardView extends React.Component {
    render(){
        return (
        <View style={styles.card}>
            <Text style={styles.heading}>Total Expenses Today : {expenses}</Text>
            <Image style={styles.image} source={require("../assets/image.bmp")} />
            <View style={styles.iconarray}>
            <IconArray style={styles.iconarray} />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        elevation: 10,
        backgroundColor: "#f5f6fa",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        margin: 15,
        padding: 20,
        overflow: 'hidden',
        borderRadius: 40
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    image: {
        resizeMode: 'cover',
        width: '70%',
        borderRadius: 200
    },
    iconarray: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        width: '100%',
        backgroundColor: "#000",
        backgroundColor: "#ffffff"
    }
})