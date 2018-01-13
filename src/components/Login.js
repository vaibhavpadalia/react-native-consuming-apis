import React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import api from "./Api";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  login = () => {
    if (this.state.email === "") {
      alert("Enter Email !");
    } else if (this.state.password === "") {
      alert("Enter Password !");
    } else {
      api.getUser(this.state.email, this.state.password).then(res => {
        if (JSON.parse(res._bodyText).success) {
          alert("Login Successful !!");
        } else {
          alert("Login Failed");
        }
      });
    }
  };

  static navigationOptions = {
    title: "Login",
    headerStyle: { backgroundColor: "#173746" },
    headerTintColor: "white",
    headerTitleStyle: { color: "white" }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="position">
        <ScrollView keyboardShouldPersistTaps={'always'}>
          <View style={styles.container}>
            <View style={styles.alignLogo}>
              <Image
                style={styles.logo}
                source={require("./images/lock.png")}
              />
            </View>
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
            <TouchableNativeFeedback onPress={() => this.login()}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Submit</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20
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

export default Login;
