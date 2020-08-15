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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MCOptions from './MCOptions';
const { width, height } = Dimensions.get('window');
const quiz = [
  {
    correctoption: 7,
    options: [25, 7, 6],
    question: '2+5 =',
  },
  {
    correctoption: 'Wicked',
    options: ['Good', 'Wicked', 'Generous'],
    question: "The synonym of 'evil' is",
  },
  {
    correctoption: 'v',
    options: ['v', 't', 'w'],
    question: 'The 22nd alphabet is',
  },
];
const Quiz = ({ navigation, qno }) => {
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
      if (score == 1 || score == 0) {
        navigation.navigate({
          routeName: 'QuizFinishScreen',
          params: { ResultScore: score, Text: 'TK' },
        });
      } else if (score > 1 && score <= 2) {
        navigation.navigate({
          routeName: 'QuizFinishScreen',
          params: { ResultScore: score, Text: 'SD' },
        });
      } else if (score == 3) {
        navigation.navigate({
          routeName: 'QuizFinishScreen',
          params: { ResultScore: score, Text: 'SMP' },
        });
      }
    }
  };

  useEffect(() => {
    console.log(answer);
  }, [answer]);

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
});

export default Quiz;
