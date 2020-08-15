import React from 'react';
import { ImageBackground } from 'react-native';
const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate('PlacementTestScreen');
  }, 3000);

  return (
    <ImageBackground
      source={require('../assets/frontpage.jpg')}
      style={{
        height: '100%',
        width: '100%',
      }}
    />
  );
};

export default Splash;
