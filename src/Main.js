import React, {Component} from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Routes from './components/Routes';
import {connect} from 'react-redux';
import {Actions} from "react-native-router-flux";

class Main extends Component{
  
  render(){
    return (
      <View style = {styles.container}>
        <StatusBar
        backgroundColor="#006f7f"
        barStyle="light-content"/>
        <Routes />    
      </View>
    );
  }
}
const styles= StyleSheet.create({
  container : {
    backgroundColor:"#008b9f",
    flexGrow: 1,
    justifyContent: 'center'
  }
});
 export default connect(null, null)(Main)