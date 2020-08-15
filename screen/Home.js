import React from 'react';
import { View, Text ,StyleSheet,TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
const Home = ({ navigation }) => {

  function Step(props) {
    if (props.filled === 'Y'){
      return (
          <TouchableOpacity
            style={styles.stepRow}
            onPress={navigation.navigate.bind(this,props.text)}>
            <Text style={styles.dotFilled}>●</Text>
            <Text style={styles.dotEmpty}>◯</Text>
            <Text style={styles.button2}>{props.text}</Text>
          </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        style={styles.stepRow}
        disabled={true}>
        <Text style={styles.dotEmpty}>◯</Text>
        <Text style={styles.dotLabel}>{props.text}</Text>
      </TouchableOpacity>
  )
  }

  return (
    <View style = {styles.container}>
      <Image source = {require('../assets/LOGO.png')} style={styles.image}/>
      <View style = {styles.buttonContainer}>
        <View>
          <TouchableOpacity onPress={navigation.navigate.bind(this,'Home')} style={{...styles.button1,backgroundColor:'#cedbd4'}}>
            <Icon name = 'md-home' size={30}/>
          </TouchableOpacity>
          <Text style = {styles.buttonText}>Home</Text>
        </View>
        <View>
          <TouchableOpacity onPress={navigation.navigate.bind(this,'Kindergarten')} style={styles.button1}>
            <Icon name = 'md-book' size={30}/>
          </TouchableOpacity>
          <Text style = {styles.buttonText}>Story</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Step text='Kindergarten' filled = 'Y'/>
        <Text style={styles.spacer}>⡇</Text>
        <Step text='Elementary' filled = 'Y'/>
        <Text style={styles.spacer}>⡇</Text>
        <Step text='Junior High' filled = 'Y'/>
        <Text style={styles.spacer}>⡇</Text>
        <Step text='Senior High' filled = 'N'/>
        <Text style={styles.spacer}>⡇</Text>
        <Step text='College' filled = 'N'/>
        <Text style={styles.spacer}>⡇</Text>
        <Step text='Work' filled = 'N'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#F5FCFF'
  },
  buttonText:{
    marginHorizontal:Dimensions.get('screen').width * 0.1 * 1.55,
    alignItems:'flex-end',
    marginVertical:5
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#99CCFF',
    width:'100%',
    marginTop:Dimensions.get('screen').height * 0.01,
    marginLeft:Dimensions.get('screen').width * 0.1,
    borderRadius: 30
  },
  levelContainer:{
    margin: 20,
    padding:20,
    flex:1,
  },
  button1:{
    borderColor:'#dff9ee',
    alignItems:'center',
    justifyContent:'center',
    width:80,
    height:80,
    backgroundColor:'#dff9ee',
    borderRadius:80,
    marginHorizontal:Dimensions.get('screen').width * 0.1,
    marginTop:30
  },
  button2:{
    borderColor:'rgba(0,0,0,0.2)',
    backgroundColor:'#99CCFF',
    borderRadius:50,
    borderRadius:20,
    fontSize: 20,
    marginTop: 7,
    marginLeft: 20,
    textAlign:'center',
    width:Dimensions.get('screen').width * 0.4
  },
  section: {
    padding: 30,
  },
  stepRow: {
    flexDirection: 'row',
  },
  dotEmpty: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'orange'
  },
  dotFilled: {
    fontSize: 30,
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: 3.5,
    color: 'black'
  },
  dotLabel: {
    borderColor:'rgba(0,0,0,0.2)',
    backgroundColor:'yellow',
    borderRadius:50,
    borderRadius:20,
    fontSize: 20,
    marginTop: 8,
    marginLeft: 20,
    textAlign:'center',
    width: Dimensions.get('screen').width * 0.4
  },
  spacer: {
    fontSize: 30,
    marginLeft: 5,
    marginVertical: -10,
  },
  image:{
    width : Dimensions.get('screen').width * 0.1,
    height: Dimensions.get('screen').height * 0.1,
    marginLeft: Dimensions.get('screen').width * 0.45
  }
})
export default Home;
