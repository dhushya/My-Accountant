import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Text, View} from 'react-native';
import CardView from './CardView';
import History from './History';
import Add from './Add';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <CardView navigation = {navigation}/>
      <StatusBar style="auto"/>
      <History />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
