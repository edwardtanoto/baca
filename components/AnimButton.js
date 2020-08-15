import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';
export default class Animbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }
  _onPress() {
    this.props._onPress(!this.state.status);
    this.setState({ status: !this.state.status });
    if (this.props.effect === 'rubberBand'){
      this.refs.view.rubberBand(800);
    }
    
    
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this._onPress()}>
        <Animatable.View
          ref='view'
          style={{
            margin: 10,
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 20,
            paddingLeft: 20,
            backgroundColor: this.state.status ? this.props.onColor : '#bdbdbd',
            borderRadius: 20,
            
          }}
        >
          <Text
            style={{
              color: this.state.status ? 'white' : '#696969',
              fontWeight: 'bold',
              textAlign:'center'
            }}
          >
            {this.props.text}
          </Text>
        </Animatable.View>
      </TouchableWithoutFeedback>
    );
  }
}
