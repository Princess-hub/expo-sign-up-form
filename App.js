import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity,StyleSheet, ScrollView} from 'react-native';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        Username: "",
        email: "",
        Password: "",
        Password_Again: "",
      }
  }
  render() {
    return (
      <View style= {styles.container}>
        <View style= {styles.signup}>
          <Text style= {styles.signupText}>Sign Up</Text>
        </View>
        <View>
          <TextInput style={styles.TextInput} placeholder="Username" 
          placeholderTextColor="grey" 
          value={this.state.Username}
          onChangeText = {(Username) => {
            this.setState({Username})
          }}
          />

        <TextInput style={styles.TextInput} placeholder="Email" 
          placeholderTextColor="grey" 
          value={this.state.Email}
          onChangeText = {(Email) => {
            this.setState({Email})
          }}
          />

          <TextInput style={styles.TextInput} 
          placeholder="Password" 
          placeholderTextColor="grey"
          autoCapitalize="none"
          secureTextEntry={true}
          value={this.state.Password}
          onChangeText = {(Password) => {
            this.setState({Password})
          }}
          />
          <TextInput style={styles.TextInput} 
          placeholder="Password again" 
          placeholderTextColor="grey"
          autoCapitalize="none"
          secureTextEntry={true}
          value={this.state.Password_again}
          onChangeText = {(Password_again) => {
            this.setState({Password_again})
          }}
          />
          
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.opacity}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.cont}>
            <Text style={styles.account}>Do not have an account?</Text>
            <TouchableOpacity style={styles.LogIn}>
              <Text style={styles.login}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 80
  },
  signup: {
    marginBottom: 50
  },
  signupText: {
    color: "#5100ad",
    fontSize: 50
  },
  TextInput: {
    borderBottomWidth: 2,
    borderBottomColor: "#5100ad",
    marginBottom: 25,
    fontSize: 20,
    paddingBottom: 5,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#0853a8",
    marginBottom: 20
  },
  opacity: {
    backgroundColor: "#5100ad",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
    marginTop: 35,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
  cont: {
    flexDirection: "row",
    justifyContent: "center",
  },
  account: {
    paddingRight: 10,
  },
  login: {
    color: "#5100ad",
    borderBottomWidth: 1,
    
  }
})

export default App;
