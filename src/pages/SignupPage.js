import React, {Component} from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Form from '../components/Form';
import LogoPage from './LogoPage';
import {Actions} from 'react-native-router-flux';
import {reduxForm, Field} from 'redux-form';
import InputText from '../components/InputText';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#008b9f',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    width: 300,
    backgroundColor: '#006f7f',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
    height: 50,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',

    textAlign: 'center',
  },
});

class SignupPage extends Component {
  goBack() {
    Actions.pop();
  }
  createNewUser = () => {
    alert('boom');
  };
  onSubmit = (values) => {
    console.log(values)
  };
  renderTextInput = (field) => {
    const {
      meta: {touched, error},
      label,
      secureTextEntry,
      maxLength,
      keyboardType,
      placeholder,
      input: {onChange, ...restInput},
    } = field;
    return (
      <View>
        <InputText
          onChangeText={onChange}
          maxLength={maxLength}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          label={label}
          {...restInput}
        />
      </View>
    );
  };
  render() {
    const {handleSubmit} = this.props;
    return (
      <View style={styles.container}>
        <LogoPage />
        <Field
          name="name"
          placeholder="Name"
          component={this.renderTextInput}
        />
        <Field
          name="email"
          placeholder="Email"
          component={this.renderTextInput}
        />
        <Field
          name="password"
          secureTextEntry={true}
          placeholder="Password"
          component={this.renderTextInput}
        />

        <TouchableOpacity
          style={styles.button}
          onPress= {handleSubmit(this.onSubmit)}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signupButton}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default reduxForm({
  form: "register",

})(SignupPage);
