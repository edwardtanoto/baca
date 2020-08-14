import React from 'react';
import { StyleSheet, View, Text,ScrollView } from 'react-native';

const dummyData  = [
  {
    ques: "2+5 =",
    choices: [25,7,6],
    answer: 7
  },
  { 
    ques: "The synonym of 'evil' is",
    choices: ['Good','Wicked','Generous'],
    answer: 'Wicked'
  },
  {
    ques: "The 22nd alphabet is",
    choices: ['v','t','w'],
    answer: 'v'
  },
  {
    ques: "One of the five senses in human is",
    choices: ['Smile','Fight','Sight'],
    answer: 'Sight'
  },
  { 
    ques: "67.42 - 28.58",
    choices: [38.57,38.84,38.94],
    answer: 38.84
  },
  {
    ques: "The capital letter of ‘g’ is",
    choices: ['B','E','G'],
    answer : 'G'
  },
  {
    ques: "Doctor’s job is to",
    choices: ['Kill a patient','Eat a patient','Cure patient'],
    answer: 'Cure patient'
  },
  { 
    ques: "The capital city of Indonesia is",
    choices: ['Jakarta','Maluku','Medan'],
    answer:'Jakarta'
  },
  {
    ques: "How many legs does a cat have?",
    choices: [4,5,6],
    answer:4
  },
  {
    ques: "Initially, I have five apples. My friend stole one piece, and my brother ate one. How many apples do I have now?",
    choices: [1,2,3],
    answer : 2
  },
]

const PlacementTestScreen = props => {
  return(
    dummyData.map(each => {
    return(
      <Text style={styles.question}>{each.ques}</Text>
      // each.choices.map(choice => <Text style = {styles.choice}>{choice}</Text>)
    )}
    )
  );
};



const styles = StyleSheet.create({
  screen:{
    color:'black',
    backgroundColor:'grey',
    justifyContent:'center'
  },
  question:{
    fontSize:18,
    textAlign:'left'
  },
  choicesOfAnswers:{
    fontSize:12
  }
})

export default PlacementTestScreen;