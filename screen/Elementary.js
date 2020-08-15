import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProgressBar, Colors } from 'react-native-paper';

const Elementary = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/LOGO.png')} style={styles.image} />
      <View style={styles.buttonContainer}>
        <View>
          <TouchableOpacity
            onPress={navigation.navigate.bind(this, 'Home')}
            style={styles.button1}
          >
            <Icon name='md-home' size={30} />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Home</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={navigation.navigate.bind(this, 'TK')}
            style={{ ...styles.button1, backgroundColor: '#cedbd4' }}
          >
            <Icon name='md-book' size={30} />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Story</Text>
        </View>
      </View>
      <View style={styles.levelContainer}>
        <View>
          <TouchableOpacity
            style={styles.story}
            onPress={() => {
              navigation.navigate('SDStoryOne');
            }}
          >
            <View style={styles.circle}>
              <Icon name='md-paper-plane' size={18} />
            </View>
            <View>
              <Text style={styles.title}>Story 1</Text>
              <ProgressBar
                progress={0}
                style={styles.progress}
                color={Colors.green800}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.story}
            onPress={() => {
              navigation.navigate('SDQUIZONE');
            }}
          >
            <View style={styles.circle}>
              <Icon name='md-checkbox-outline' size={18} />
            </View>
            <View>
              <Text style={styles.title}>Quiz 1</Text>
              <ProgressBar
                progress={0}
                style={styles.progress}
                color={Colors.green800}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.story}>
            <View style={styles.circle}>
              <Icon name='md-paper-plane' size={18} />
            </View>
            <View>
              <Text style={styles.title}>Story 2</Text>
              <ProgressBar
                progress={0}
                style={styles.progress}
                color={Colors.green800}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.story}>
            <View style={styles.circle}>
              <Icon name='md-checkbox-outline' size={18} />
            </View>
            <View>
              <Text style={styles.title}>Quiz 2</Text>
              <ProgressBar
                progress={0}
                style={styles.progress}
                color={Colors.green800}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.story}
            onPress={navigation.navigate.bind(this, 'Conclusion')}
          >
            <View style={styles.circle}>
              <Icon name='md-quote' size={18} />
            </View>
            <View>
              <Text style={styles.title}>Conclusion</Text>
              <Text>How to write an alphabet</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  buttonText: {
    marginHorizontal: Dimensions.get('screen').width * 0.1 * 1.55,
    alignItems: 'flex-end',
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#99CCFF',
    width: '100%',
    marginTop: Dimensions.get('screen').height * 0.01,
    marginLeft: Dimensions.get('screen').width * 0.1,
    borderRadius: 30,
  },
  levelContainer: {
    margin: 20,
    padding: 20,
    flex: 1,
  },
  button1: {
    borderColor: '#dff9ee',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#dff9ee',
    borderRadius: 80,
    marginHorizontal: Dimensions.get('screen').width * 0.1,
    marginTop: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  story: {
    flexDirection: 'row',
    marginBottom: Dimensions.get('screen').height * 0.06,
    justifyContent: 'flex-start',
  },
  circle: {
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: '#99CCFF',
    borderRadius: 50,
    fontSize: 20,
    width: 50,
    height: 50,
    marginRight: Dimensions.get('screen').width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    height: Dimensions.get('screen').height * 0.01,
    width: Dimensions.get('screen').width * 0.5,
    borderRadius: 30,
  },
  image: {
    width: Dimensions.get('screen').width * 0.1,
    height: Dimensions.get('screen').height * 0.1,
    marginLeft: Dimensions.get('screen').width * 0.45,
  },
});
export default Elementary;
