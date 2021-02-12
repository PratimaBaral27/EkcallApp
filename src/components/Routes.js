import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

export default class Routes extends Component{
    render(){
        return(
            <Router> 
             <Stack key="root" hideNavBar={true}>
            <Scene key ="login" component={LoginPage} title="LoginPage" initial/>
            <Scene key ="signup" component ={SignupPage} title ="SignupPage" />      
            </Stack>
            </Router>

        );
    }
} 