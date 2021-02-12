import React, {Component} from 'react';
import {
  TouchableOpacity,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View
  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Form from '../components/Form';
import LogoPage from './LogoPage';
  export default class LoginPage extends Component{
     signup(){
       Actions.signup()
     }
      render(){
          return(
          <View style ={styles.container}>
            <LogoPage />
            <Form type="Login" />
            <View style={styles.signupTextCont}>
            <Text style ={styles.signupText}>Don't have an account yet?</Text>
           <TouchableOpacity onPress={this.signup}>
             <Text style={styles.signupButton}> Signup</Text>
             </TouchableOpacity>   
            </View>
          </View>
          )
      }
  }
  const styles= StyleSheet.create({
    container : {
      backgroundColor:"#008b9f",
      flexGrow: 1,
      alignItems:'center',
      justifyContent: 'center'
    },
    signupTextCont:{
      flexGrow:1,
      alignItems:'flex-end',
      justifyContent:'center',
      paddingVertical: 16,
      flexDirection:'row'
    },
    signupText:{
      color:'rgba(255,255,255,0.6)',
      fontSize:16

    },
    signupButton:{
      color:"#ffffff",
      fontSize:16,
      fontWeight:'500'
    }

  })
