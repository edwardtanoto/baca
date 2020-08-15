import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Button,
} from 'react-native';
import StoryQuizFinishScreen from '../components/QuizFinishScreen';
import TKQUIZStoryTwo from '../components/TKQUIZStoryTwo';
const TKQUIZTWO = ({ route, navigation }) => {
  const [isQuizFinished, setisQuizFinished] = useState(false);
  const [initQno, setinitqno] = useState(0);
  // useEffect(() => {
  //   if (route.params('quizFinish')) {
  //     const finished = route.params('quizFinish');
  //     const score = route.params('resultScore');

  //     setisQuizFinished(finished);
  //   }
  // }, [route.params('quizFinish')]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />

      {isQuizFinished ? (
        <StoryQuizFinishScreen score={score} navigation={navigation} route={route} />
      ) : (
        <TKQUIZStoryTwo qno={initQno} navigation={navigation} />
      )}
    </View>
  );
};

export default TKQUIZTWO;
