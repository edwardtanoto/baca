import React, { useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Quiz from '../components/quiz';
import QuizFinishScreen from './QuizFinishScreen';
const PlacementTestScreen = ({ navigation }) => {
  const finished = navigation.state.params('quizFinish');
  const [isQuizFinished, setisQuizFinished] = useState(false);
  useEffect(() => {
    setisQuizFinished();
  }, []);

  const score = navigation.state.params('resultScore');

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />

      {isQuizFinished ? <QuizFinishScreen /> : <Quiz />}
    </View>
  );
};

export default PlacementTestScreen;
