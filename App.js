import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import Home from "./src/components/Home";
import Login from "./src/components/Login";
import Register from "./src/components/Register";

export default (App = StackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  Register: { screen: Register }
}));
