import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import { StatusBar } from 'expo-status-bar';
const height = Dimensions.get('window').height;
export default class Add extends React.Component {
    render() {
        return (
            <View style={styles.screen}>
                <Card>
                    <Text style={styles.formtext}>Title :</Text>
                    <TextInput style={styles.forminput}></TextInput>
                    <Text style={styles.formtext}>Description : </Text>
                    <TextInput style={styles.forminput}></TextInput>
                    <Text style={styles.formtext}>Amount : </Text>
                    <TextInput 
                        style={styles.amount} 
                        allowFontScaling={true}
                        keyboardType="number-pad"
                        placeholder="₹0000"></TextInput>
                </Card>
                <View style={styles.button}>
                    <View style={styles.empty} ></View>
                    <TouchableOpacity title="hello" style={styles.TouchableOpacity}>
                        <Text style={styles.submit}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const Card = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({

    formtext: {
        alignSelf: 'stretch',
        fontSize: 20,
        padding: 10,
        // fontWeight: "bold",
        letterSpacing: 3,
        color: '#f5f6fa'
    },
    container: { 
        height: 350,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        padding: 10,
        elevation: 2,
        backgroundColor: "#2f3640",
        borderRadius: 20,
    },
    forminput: {
        backgroundColor: "#576574",
        borderRadius: 30,
        height: 60,
        padding: 10,
        elevation: 2,
        alignSelf: 'stretch',
        paddingLeft: 20,
        fontSize: 20,
        color: '#fff'
    },
    amount: {
        flex: 1,
        backgroundColor: "#f5f6fa",
        height: 50,
        fontSize: 30,
        borderRadius: 10,
        width: 100
    },
    TouchableOpacity: {
        margin: 10,
        backgroundColor: "#000000",
        height: 60,
        borderRadius: 40,
    },
    screen: {
        backgroundColor: "#2c3e50",
        flex: 1,
    },
    button: {
        justifyContent: 'flex-end',
        flex: 1.5,
        backgroundColor: "#2c3e50"
    }, 
    empty: {
        flex: 6,
    },
    submit: {
        color: "white",
        textAlign: 'center',
        margin: 20,
    }
})