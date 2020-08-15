import React, { useState, useEffect } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MCOptions from './MCOptions';
import PlacementTestScreen from '../screen/PlacementTestScreen';

const { width, height } = Dimensions.get('window');
const quiz = [
  {
    correctoption: 'L',
    options: ['J', 'K', 'L'],
    question: 'The 12th alphabet is',
  },
  {
    correctoption: 'N',
    options: ['M', 'N', 'O'],
    question: 'The 14th alphabet is',
  },
  {
    correctoption: 'H',
    options: ['F', 'G', 'H'],
    question: 'The 8th alphabet is',
  },
  {
    correctoption: 'Q',
    options: ['Q', 'R', 'S'],
    question: 'The 17th alphabet is',
  },
  {
    correctoption: 'T',
    options: ['U', 'W', 'T'],
    question: 'The 20th alphabet is',
  },
];
const TKQUIZStoryOne = ({ navigation, qno }) => {
  const [score, setscore] = useState(1);
  const [question, setQuestion] = useState(quiz[qno].question);
  const [options, setOptions] = useState(quiz[qno].options);
  const [correctOption, setCorrectOption] = useState(quiz[qno].correctoption);
  const [questionNo, setquestionNo] = useState(qno);
  const [answer, setAnswer] = useState([]);

  const getSelectedValue = (selectedValue) => {
    if (selectedValue != null) {
      setAnswer(answer.concat(selectedValue));
    }
  };
  const next = () => {
    if (questionNo < quiz.length - 1) {
      let tempqno = questionNo + 1;
      setquestionNo(tempqno);
      setQuestion(quiz[tempqno].question);
      setOptions(quiz[tempqno].options);
      setCorrectOption(quiz[tempqno].correctoption);
    } else {
      if (score <= 2) {
        navigation.navigate({
          routeName: 'StoryQuizFinishScreen',
          params: { ResultScore: score, Text: 'You should try again' },
        });
      } else if (score > 2 && score <= 4) {
        navigation.navigate({
          routeName: 'StoryQuizFinishScreen',
          params: { ResultScore: score, Text: 'You can do better next time' },
        });
      } else if (score >= 5) {
        navigation.navigate({
          routeName: 'StoryQuizFinishScreen',
          params: { ResultScore: score, Text: 'If you\'re my kid, I would be very happy' },
        });
      }
    }
  };

  useEffect(() => {
    answer.map((ans, index) => {
      if (ans == quiz[index].correctoption) {
        let tempScore = score + 1;
        setscore(tempScore);
      } else {
        let tempScore = score;
        setscore(tempScore);
      }
    });
  }, [answer]);

  const currentOptions = options;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/placement-test-02.jpg')}
        style={styles.image}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '60%',
          }}
        >
          <View style={styles.oval}>
            <Text style={styles.welcome}>{question}</Text>
          </View>
          <View style={{ paddingBottom: '70%', textAlign: 'center' }}>
            <MCOptions
              options={currentOptions}
              getSelectedValue={getSelectedValue}
              next={next}
            />
          </View>
        </View>
        <Image source={require('../assets/LOGO.png')} style={styles.logo} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  oval: {
    width: (width * 90) / 100,
    borderRadius: 20,
    backgroundColor: 'green',
    alignItems: 'center',
    marginBottom: Dimensions.get('screen').height * 0.1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    color: 'white',
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
    width: Dimensions.get('screen').width,
  },
  logo: {
    marginLeft: Dimensions.get('screen').width * 0.4,
    width: Dimensions.get('screen').width * 0.2,
    height: Dimensions.get('screen').height * 0.15,
    backgroundColor: 'white',
  },
});

export default TKQUIZStoryOne;
