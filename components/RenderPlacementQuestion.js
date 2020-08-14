import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
const renderPlacementQuestion = ({ data }) => {
  //   const [Question, setQuestion] = useState(
  //     data.map((questions) => questions.ques)
  //   );
  //   const [Choices, setChoices] = useState([]);
  //   const [selectedChoices, setSelectedChoices] = useState([]);
  //   const [Answer, setAnswer] = useState([]);
  //   console.log(Question);
  //   return Question.map((ques) => <Text>{ques}</Text>);
  const [selectedChoice, setSelectedChoice] = useState([]);
  const handleChoice = (e) => {
    setSelectedChoice(...selectedChoice, ...e.value);
  };
  return data.map((datum) => (
    <View>
      <Text key={datum.ques}> {datum.ques}</Text>
      {datum.choices.map((choice) => {
        return (
          <View>
            <Button
              value={choice}
              onPress={handleChoice(choice)}
              title={choice.toString()}
              color='#841584'
            />
          </View>
        );
      })}
    </View>
  ));

  //   const generatePlacement = (data) => {
  //     return (
  //       <View>
  //         console.log(data);
  //         {/* <Text>{data.item.ques}</Text> */}
  //       </View>
  //     );
  //   };
  //   return (
  //     <View>
  //       <FlatList data={data} renderItem={generatePlacement} />
  //     </View>
  //   );
};

export default renderPlacementQuestion;
