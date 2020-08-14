import Home from '../screen/Home';
import Splash from '../screen/Splash';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { useEffect } from 'react';
import PlacementTestScreen from './../screen/PlacementTestScreen';

const SplashNavigator = createStackNavigator({
  SplashScreen: { screen: Splash, navigationOptions: { headerShown: false } },
  PlacementTestScreen: {
    screen: PlacementTestScreen,
    navigationOptions: { headerShown: false },
  },
  Home: { screen: Home, navigationOptions: { headerShown: false } },
});

export default createAppContainer(SplashNavigator);
