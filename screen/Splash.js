import React from 'react';
import { ImageBackground } from 'react-native';
const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate('Home');
  }, 2000);

  return (
    <ImageBackground
      source={require('../assets/schoolhall.jpg')}
      style={{
        height: '100%',
        width: '100%',
      }}
    />
  );
};

export default Splash;
