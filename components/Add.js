import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image} from 'react-native';
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
                    <View style={styles.empty} >
                        <Text style={styles.quotes}>{"\""}Money Spent Is money gained{"\""}{"\n\n"}-The Author of this app</Text>
                    </View>
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
        color: '#000'
    },
    container: { 
        height: 350,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        padding: 10,
        elevation: 10,
        backgroundColor: "#f5f6fa",
        borderRadius: 20,
        margin: 10,
    },
    forminput: {
        backgroundColor: "#fff",
        borderRadius: 30,
        height: 60,
        padding: 10,
        elevation: 2,
        alignSelf: 'stretch',
        paddingLeft: 20,
        fontSize: 20,
        color: '#000'
    },
    amount: {
        flex: 1,
        backgroundColor: "#fff",
        height: 50,
        fontSize: 30,
        borderRadius: 10,
        width: 100
    },
    TouchableOpacity: {
        backgroundColor: "#ecf0f1",
        height: 60,
        borderRadius: 20,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        justifyContent: 'center',
        borderColor: "#000",
        borderWidth: 2
    },
    screen: {
        backgroundColor: "#f5f6fa",
        flex: 1,
    },
    button: {
        justifyContent: 'flex-end',
        flex: 1.5,
        backgroundColor: "#f5f6fa"
    }, 
    empty: {
        flex: 6,
        alignSelf: 'stretch',
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        color: "#000",
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'normal',
        letterSpacing: 2,
        fontSize: 20
    }, 
    quotes: {
        color: "#9e9e9e",
        fontSize: 20,
    }
})