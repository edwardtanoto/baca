import Home from '../screen/Home';
import Splash from '../screen/Splash';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { useEffect } from 'react';
import PlacementTestScreen from './../screen/PlacementTestScreen';
import { TKStoryONE } from '../screen/TKStoryONE';
import Kindergarten from './../screen/Kindergarten';
import QuizFinishScreen from './../screen/QuizFinishScreen';
import { TKStoryTwo } from './../screen/TKStoryTWO';

const SplashNavigator = createStackNavigator({
  SplashScreen: { screen: Splash, navigationOptions: { headerShown: false } },
  PlacementTestScreen: {
    screen: PlacementTestScreen,
    navigationOptions: { headerShown: false },
  },
  Home: { screen: Home, navigationOptions: { headerShown: false } },
  TKStoryONE: { screen: TKStoryONE, navigationOptions: { headerShown: false } },
  TKStoryTwo: { screen: TKStoryTwo, navigationOptions: { headerShown: false } },

  Kindergarten: {
    screen: Kindergarten,
    navigationOptions: { headerShown: false },
  },
  // SD: { screen: SD, navigationOptions: { headerShown: false } },
  // SMP: { screen: SMP, navigationOptions: { headerShown: false } },
  QuizFinishScreen: {
    screen: QuizFinishScreen,
    navigationOptions: { headerShown: false },
  },
});

export default createAppContainer(SplashNavigator);
