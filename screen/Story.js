import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";

import {SCRIPT as script} from '../data/Script' 

export const Story = () => {
    let [index, setIndex] = useState(0)
   
    const nextStory = () => {
        console.log(script[index].characterName)
        setIndex(index++)
    }
    console.log(script[index].characterName)
  return (
    
    <View style={{ backgroundColor: "white", flex: 1, justifyContent: "space-evenly"}}>
       
      <ImageBackground
        source={require("../assets/classroom.jpg")}
        style={styles.image}
      >
          <View >
          <Image
        source={require("../assets/ibu.png")}
        style={styles.character}
      ></Image>
      </View>
      <TouchableOpacity style={styles.dialog} onPress={nextStory}>
      {/* <View >
        <Text style={styles.Tagline}>{script[index].characterName}</Text>
        <Text style={styles.Textname}>
        {script[index].dialog}
        </Text>
      </View> */}
      <View >
        <Text style={styles.Tagline}>anaananana</Text>
        <Text style={styles.Textname}>
        scriptbcbcbcbcb        
        </Text>
      </View>
      </TouchableOpacity>
      </ImageBackground>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
    
  },
  character: {
    height : '80%',
    width :150
  },
  Tagline: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  dialog: {
    justifyContent: "flex-end",
    padding: 25,
    position: 'absolute',
    zIndex: 10,
    // marginTop: 300,
    width: '100%',
    backgroundColor :'rgba(255,255,255,0.5)',
  },
});
