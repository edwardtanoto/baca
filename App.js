import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlacementTestScreen from './screens/PlacementTestScreen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Mari Mulai</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
