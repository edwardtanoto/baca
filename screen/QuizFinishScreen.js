import React, { useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Button,
} from 'react-native';

const QuizFinishScreen = ({ navigation }) => {
  const scoreResult = navigation.state.params.score;
  const continueHomeScreen = () => {
    navigation.navigate('home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.circle}>{scoreResult}</View>
      <Button title='Continue' onPress={continueHomeScreen} />
    </View>
  );
};
const scoreCircleSize = 300;

const styles = StyleSheet.create({
  score: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scoreCircleSize,
    height: scoreCircleSize,
    borderRadius: scoreCircleSize / 2,
    backgroundColor: 'green',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33CCCC', //#33CCCC
  },
  toolbar: {
    backgroundColor: '#212f3c',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
  },

  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
  },
});
export default QuizFinishScreen;
