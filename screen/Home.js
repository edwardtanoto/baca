import React from 'react';
import { View, Text, Button } from 'react-native';
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
      <Button title='story' onPress={navigation.navigate.bind(this, 'TKStoryONE')} />
    </View>
  );
};

export default Splash;
