import React, {Component} from 'react';
import {
    Platform,
    Image,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity
  } from 'react-native';

  export default class Form extends Component{
      render(){
          return(
              <View style = {StyleSheet.container}>
                  <TextInput style ={styles.inputBox}
                   underlineColorAndroid= 'rgba(0,0,0,0)'
                   placeholder ='Username'
                   placeholderTextColor="#ffffff"
                   selectionColor="#fff"
                   onSubmitEditing ={() => this.password.focus()}
                    />
                     <TextInput style ={styles.inputBox}
                   underlineColorAndroid= 'rgba(0,0,0,0)'
                   placeholder ='Password'
                   secureTextEntry={true}
                   placeholderTextColor="#ffffff"
                   ref={(input) => this.password = input}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style ={styles.buttonText}>{this.props.type}</Text>
                    </TouchableOpacity>

           
              </View>
          )}
  }
  const styles = StyleSheet.create({
    container: {
      flexGrow :1,
      justifyContent:'center',
      alignItems:'center'
    },
    inputBox:{
        width:300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize: 15,
        color: '#ffffff',
        marginVertical:10
    },
    button:{
        width:300,
        backgroundColor:"#006f7f",
        borderRadius:25,
        marginVertical:10,
        paddingVertical:12,
        height:50,
        

    },
    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:"#ffffff",
        
        textAlign:'center'

    }
    
  
  });