import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  ScrollView
} from "react-native";
import Header from "./Header";

class Home extends React.Component {
  static navigationOptions = {
    title: "Home",
    header: false
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Header />
        <View style={{ margin: 20 }}>
          <Text style={styles.welcome}>Welcome To</Text>

          <View style={styles.alignLogo}>
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={require("./images/logo.png")}
            />
          </View>

          <View style={styles.container}>
            <TouchableNativeFeedback onPress={() => navigate("Login")}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Login</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback onPress={() => navigate("Register")}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>SignUp</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  alignLogo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100
  },
  logo: {
    position: "absolute",
    width: 290,
    height: 100,
    marginTop: 30,
    marginBottom: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 90
  },
  container: {
    paddingTop: 170,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  buttonText: {
    marginLeft: 30,
    marginTop: 10,
    color: "white"
  },
  buttonContainer: {
    width: 100,
    height: 40,
    backgroundColor: "#173746",
    borderRadius: 20
  }
});

export default Home;
