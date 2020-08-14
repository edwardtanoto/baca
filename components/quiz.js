import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animbutton from './AnimButton';
const { width, height } = Dimensions.get('window');
let arrnew = [];
const jsonData = {
  quiz: {
    quiz1: {
      question1: {
        correctoption: 'option2',
        options: {
          option1: 25,
          option2: 7,
          option3: 6,
        },
        question: '2+5 =',
      },
      question2: {
        correctoption: 'option2',
        options: {
          option1: 'Good',
          option2: 'Wicked',
          option3: 'Generous',
        },
        question: "The synonym of 'evil' is",
      },
      question3: {
        correctoption: 'option1',
        options: {
          option1: 'v',
          option2: 't',
          option3: 'w',
        },
        question: 'The 22nd alphabet is',
      },
      question4: {
        correctoption: 'option3',
        options: {
          option1: 'Smile',
          option2: 'Fight',
          option3: 'Sight',
        },
        question: "One of the five senses in human is",
      },
      question5: {
        correctoption: 'option2',
        options: {
          option1: 38.57,
          option2: 38.84,
          option3: 38.94,
        },
        question:
        "67.42 - 28.58",
      },
      question6: {
        correctoption: 'option3',
        options: {
          option1: 'B',
          option2: 'E',
          option3: 'G',
        },
        question: "The capital letter of ‘g’ is",
      },
      question7: {
        correctoption: 'option3',
        options: {
          option1: 'Kill a patient',
          option2: 'Eat a patient',
          option3: 'Cure patient',
        },
        question: "Doctor’s job is to",
      },
      question8: {
        correctoption: 'option1',
        options: {
          option1: 'Jakarta',
          option2: 'Medan',
          option3: 'Maluku',
        },
        question: "The capital city of Indonesia is",
      },
      question9: {
        correctoption: 'option1',
        options: {
          option1: 4,
          option2: 5,
          option3: 6,
        },
        question: "How many legs does a cat have?",
      },
      question10: {
        correctoption: 'option2',
        options: {
          option1: 1,
          option2: 2,
          option3: 3,
        },
        question: "Initially, I have five apples. My friend stole two piece, and my brother ate one. How many apples do I have now?",
      },
    },
  },
};
export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.qno = 0;
    this.score = 0;

    const jdata = jsonData.quiz.quiz1;
    arrnew = Object.keys(jdata).map(function (k) {
      return jdata[k];
    });
    this.state = {
      question: arrnew[this.qno].question,
      options: arrnew[this.qno].options,
      correctoption: arrnew[this.qno].correctoption,
      countCheck: 0,
    };
  }
  prev() {
    if (this.qno > 0) {
      this.qno--;
      this.setState({
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        correctoption: arrnew[this.qno].correctoption,
      });
    }
  }
  next() {
    if (this.qno < arrnew.length - 1) {
      this.qno++;

      this.setState({
        countCheck: 0,
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        correctoption: arrnew[this.qno].correctoption,
      });
    } else {
      this.props.quizFinish(this.score * 100);
    }
  }
  _answer(status, ans) {
    if (status == true) {
      const count = this.state.countCheck + 1;
      this.setState({ countCheck: count });
      if (ans == this.state.correctoption) {
        this.score += 1;
      }
    } else {
      const count = this.state.countCheck - 1;
      this.setState({ countCheck: count });
      if (this.state.countCheck < 1 || ans == this.state.correctoption) {
        this.score -= 1;
      }
    }
  }
  render() {
    let _this = this;
    const currentOptions = this.state.options;
    const options = Object.keys(currentOptions).map(function (k) {
      return (
        <View key={k} style={{ margin: 10 }}>
          <Animbutton
            countCheck={_this.state.countCheck}
            onColor={'green'}
            effect={'tada'}
            _onPress={(status) => _this._answer(status, k)}
            text={currentOptions[k]}
            style={{textAlign:'center'}}
          />
        </View>
      );
    });

    return (
      <ScrollView style={{ backgroundColor: '#F5FCFF', paddingTop: 10 }}>
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <View style={styles.oval}>
              <Text style={styles.welcome}>{this.state.question}</Text>
            </View>
            <View style = {{paddingBottom:50,textAlign:'center'}}>{options}</View>
            <View style={{ flexDirection: 'row' }}>
              {/* <Button
          onPress={() => this.prev()}
          title="Prev"
          color="#841584"
        /> */}
              <View/>

              <TouchableOpacity onPress={() => this.next()}>
                <View
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 20,
                    paddingLeft: 20,
                    borderRadius: 10,
                    backgroundColor: 'green',
                    width:100,
                    alignItems:"center"
                  }}
                >
                  <Icon name='md-arrow-round-forward' size={40} color='white' />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  oval: {
    width: (width * 90) / 100,
    borderRadius: 20,
    backgroundColor: 'green',
    alignItems:"center"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  welcome: {
    fontSize: 25,
    margin: 15,
    color: 'white',
    textAlign:'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
