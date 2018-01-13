import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>First App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#173746",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
    color: "white"
  }
});

export default Header;
