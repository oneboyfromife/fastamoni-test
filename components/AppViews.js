import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import COLORS from "../constants/colors";
import Spacing from "../constants/Spacing";

export const AppSafeAreaView = (props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingLeft: Spacing * 2,
        paddingRight: Spacing * 2,
        paddingTop: StatusBar.currentHeight + 20,
        ...props.style,
      }}
    >
      {props.children}
    </SafeAreaView>
  );
};

export const AppBgView = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingLeft: Spacing * 2,
        paddingRight: Spacing * 2,
        paddingTop: StatusBar.currentHeight + 10,
        ...props.style,
      }}
    >
      {props.children}
    </View>
  );
};

export const AppView = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingLeft: Spacing * 2,
        paddingRight: Spacing * 2,
        paddingTop: StatusBar.currentHeight + 5,
        ...props.style,
      }}
    >
      {props.children}
    </View>
  );
};
