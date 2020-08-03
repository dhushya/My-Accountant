import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, TouchableNativeFeedback} from 'react-native';

export default class IconArray extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icons}>
                <Image style={styles.icons} source={require("../assets/graph.png")}></Image>
                <Text>Graph</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons}>
                <Image style={styles.icons} source={require("../assets/settings.png")}></Image>
                <Text>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons} onPress={() => {this.props.navigation.navigate("New")}}>
                <Image style={styles.icons} source={require("../assets/add_new.png")}></Image>
                <Text>Add New</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor:'#f5f6fa',
        width: '100%',
    },
    icons: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#f5f6fa',
        flex: 1,
        height: 100,
    }
})