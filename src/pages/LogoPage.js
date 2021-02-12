import React, {Component} from 'react';
import {
    Platform,
    Image,
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';

  export default class LogoPage extends Component{
      render(){
          return(
            <View style={styles.container}>
              <Image style={{width:200, height:200}} 
              source ={require('../images/logo.jpg')} />
               {/* <Text style ={styles.textlogo}>Welcome to EKCALL</Text>  */}
              </View>
          );
        }
   }
  const styles = StyleSheet.create({
 container: {
      flexGrow:1,
      justifyContent:'center',
      alignItems:'center'
    },   
    textlogo:{
      fontSize:18,
      color:'rgba(255,255,255,0.7)'    
    }  
  });