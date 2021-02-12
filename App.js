import React, {Component} from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from "react-redux";
import Routes from './src/components/Routes';
import Main from './src/Main';
import { PersistGate } from 'redux-persist/integration/react';
import  persist  from "./src/config/store";
//  console.log(persist);
const persistStore = persist();

export default class App extends Component{
  render(){
    
    return (
      <Provider store = {persistStore.store}>
        <PersistGate loading = {null} persistor={persistStore.persistor}>
       <Main />
       </PersistGate>
      </Provider>
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