import React, { Component } from "react";
import Animals from "./Animals";
import SocialTheme from "./SocialTheme";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  Animals: { screen: Animals },
  SocialTheme: { screen: SocialTheme }
}));
