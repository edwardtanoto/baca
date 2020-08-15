import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
const Splash = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Home</Text>
      <Button title='story' onPress={navigation.navigate('Story')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Splash;
