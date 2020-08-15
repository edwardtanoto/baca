import Home from '../screen/Home';
import Splash from '../screen/Splash';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { useEffect } from 'react';
import PlacementTestScreen from './../screen/PlacementTestScreen';
import { TKStoryONE } from '../screen/TKStoryONE';
import Kindergarten from './../screen/Kindergarten';
import QuizFinishScreen from './../components/QuizFinishScreen';
import StoryQuizFinishScreen from './../components/StoryQuizFinishScreen';
import { TKStoryTWO } from './../screen/TKStoryTWO';
import TKQUIZONE from '../screen/TKQUIZONE';
import TKQUIZTWO from '../screen/TKQUIZTWO';
const SplashNavigator = createStackNavigator({
  SplashScreen: { screen: Splash, navigationOptions: { headerShown: false } },
  PlacementTestScreen: {
    screen: PlacementTestScreen,
    navigationOptions: { headerShown: false },
  },
  Home: { screen: Home, navigationOptions: { headerShown: false } },
  TKStoryONE: { screen: TKStoryONE, navigationOptions: { headerShown: false } },
  TKStoryTWO: { screen: TKStoryTWO, navigationOptions: { headerShown: false } },
  TKQUIZONE: {
    screen: TKQUIZONE,
    navigationOptions: { headerShown: false },
  },
  TKQUIZTWO: {
    screen: TKQUIZTWO,
    navigationOptions: { headerShown: false },
  },

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
  StoryQuizFinishScreen:{
    screen:StoryQuizFinishScreen,
    navigationOptions: {headerShown:false}
  }
});

export default createAppContainer(SplashNavigator);
