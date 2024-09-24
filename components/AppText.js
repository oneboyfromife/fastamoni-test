import React from "react";
import { Text, StyleSheet } from "react-native";

const MediumText = ({ children, style, ...props }) => {
  return (
    <Text style={[styles.mediumText, style]} {...props}>
      {children}
    </Text>
  );
};

const BoldText = ({ children, style, ...props }) => {
  return (
    <Text style={[styles.boldText, style]} {...props}>
      {children}
    </Text>
  );
};

const SemiBoldText = ({ children, style, ...props }) => {
  return (
    <Text style={[styles.semiBoldText, style]} {...props}>
      {children}
    </Text>
  );
};

const SmallText = ({ children, style, ...props }) => {
  return (
    <Text style={[styles.smallText, style]} {...props}>
      {children}
    </Text>
  );
};


// Stylesheet for the text components
const styles = StyleSheet.create({
  mediumText: {
    color: "#32343e",
    fontSize: 14,
    fontFamily: "Sen-Regular",
  },
  boldText: {
    color: "#32343e",
    fontSize: 14,
    fontFamily: "Sen-Bold",
  },
  semiBoldText: {
    color: "#32343e",
    fontSize: 14,
    fontFamily: "Sen-SemiBold",
  },
  smallText: {
    color: "#32343e",
    fontSize: 12,
    fontFamily: "Sen-Regular",
  },
});

export {
  MediumText,
  BoldText,
  SemiBoldText,
  SmallText,
};
