import React, { useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Button,
  Dimensions,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const QuizFinishScreen = ({ route, navigation }) => {
  const score = navigation.getParam('ResultScore');
  const text = navigation.getParam('Text');
  return (
    (score > 0.4) ?
    <View style={styles.container}>
        <ImageBackground source = {require('../assets/confetti.jpg')} style = {{width:'100%',alignItems:'center',flex:1}}>
          <View style={styles.square}>
            <Text style = {styles.title}>Well Done! You got {Math.floor(score*100)}</Text>
            <View style ={{flexDirection:'row'}}>
              <Icon name = "md-trophy" size = {Dimensions.get('screen').height > 500 ? 50: 30} style={{color:'gold',marginHorizontal:10}}/>
              <Icon name = "md-trophy" size = {Dimensions.get('screen').height > 500 ? 50: 30} style={{color:'gold',marginHorizontal:10}}/>
              <Icon name = "md-trophy" size = {Dimensions.get('screen').height > 500 ? 50: 30} style={{color:'gold',marginHorizontal:10}}/>
            </View>
            <Text style={styles.score}>{text}</Text>
          </View>
          <Button
            title='Continue'
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </ImageBackground> 
    </View>:
    <View style={styles.container2}>
        <View style={styles.fail}>
          <Text style = {styles.title}>Oh no! You got {Math.floor(score*100)}</Text>
          <View style ={{flexDirection:'row'}}>
            <Icon name = "md-sad" size = {Dimensions.get('screen').height > 500 ? 50: 30} style={{color:'black',marginHorizontal:10}}/>
          </View>
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
    textAlign:'center'
  },
  square: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('screen').height * 0.3,
    marginTop: Dimensions.get('screen').height * 0.25,
    borderRadius:10,
    backgroundColor: '#43d3f3',
    marginBottom:Dimensions.get('screen').height * 0.05
  },
  fail: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('screen').height * 0.3,
    borderRadius:10,
    backgroundColor: 'yellow',
    marginBottom:Dimensions.get('screen').height * 0.05
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor:'#5e88b7'
  },
  container2: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#5e88b7'
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
