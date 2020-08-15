import React, { useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Button,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const QuizFinishScreen = ({ route, navigation }) => {
  const score = navigation.getParam('ResultScore');
  const text = navigation.getParam('Text');
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        {score >=3 ?
        <Text style = {styles.title}>Well Done!</Text> : <Text style = {styles.title}>Oh no!</Text>
        }
        {score >=3?
        <Icon name = "md-happy" size = {Dimensions.get('screen').height > 500 ? 50: 30}/>:<Icon name = "md-sad" size = {Dimensions.get('screen').height > 500 ? 50: 30}/>
        }
        <Text style={styles.score}>{text}</Text>
      </View>
      <Button
        title='Continue'
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};
const scoreCircleSize = 300;

const styles = StyleSheet.create({
  score: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    textAlign:'center'
  },
  title:{
    fontSize:28,
    fontWeight:'bold',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scoreCircleSize,
    height: scoreCircleSize,
    borderRadius: scoreCircleSize / 2,
    backgroundColor: 'gold',
    marginBottom:Dimensions.get('screen').height * 0.05
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
