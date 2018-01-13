import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableNativeFeedback
} from "react-native";
import api from "./Api";

class Register extends React.Component {
  state = {
    email: "",
    password: "",
    confirm: ""
  };

  signup = () => {
    if (this.state.email === "") {
      alert("Enter email id !!");
    } else if (this.state.password === "") {
      alert("Enter password !!");
    } else if (this.state.confirm === "") {
      alert("Enter confirmation for password !!");
    } else {
      if (this.state.password === this.state.confirm) {
        api.createUser(this.state.email, this.state.password).then(res => {
          if (JSON.parse(res._bodyText).success) {
            alert("Signup Successful !!");
          } else {
            alert("Signup Failed");
          }
        });
      } else {
        alert("Both passwords don't match !!");
      }
    }
  };

  static navigationOptions = {
    title: "Register",
    headerStyle: { backgroundColor: "#173746" },
    headerTintColor: "white",
    headerTitleStyle: { color: "white" }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="position">
        <View style={styles.container}>
          <TextInput
            onChangeText={text => this.setState({ email: text })}
            keyboardType="email-address"
            placeholder="Enter Email"
          />
          <TextInput
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry={true}
            placeholder="Enter Password"
          />
          <TextInput
            onChangeText={text => this.setState({ confirm: text })}
            secureTextEntry={true}
            placeholder="Confirm Password"
          />
          <TouchableNativeFeedback onPress={() => this.signup()}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Submit</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 40
  },
  alignLogo: {
    paddingTop: 10,
    alignItems: "center"
  },
  logo: {
    width: 140,
    height: 140,
    marginTop: 10,
    marginBottom: 50
  },
  buttonContainer: {
    width: 100,
    height: 40,
    backgroundColor: "#173746",
    borderRadius: 20,
    marginTop: 30
  },
  buttonText: {
    marginLeft: 30,
    marginTop: 10,
    color: "white"
  }
});

export default Register;
