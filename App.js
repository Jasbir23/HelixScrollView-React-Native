import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animals from "./src/Example/Animals";

export default class App extends React.Component {
  render() {
    return <Animals />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
