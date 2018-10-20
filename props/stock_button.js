import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView
} from 'react-native';
export default class stock_button extends Component{
  render(){
    return(
      <TouchableOpacity style={[styles.button]}
        onPress={()=>{this.props.onPress(this.props.name,
          this.props.code)}}>
      <Text style={{fontSize: 20}}>{this.props.name}</Text>
    </TouchableOpacity>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button:{
    margin: 10,
    borderWidth: 1,
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  }
});
