import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AppSafeAreaView } from "../components/AppViews";
import {
  BoldText,
  MediumText,
  SemiBoldText,
  SmallText,
} from "../components/AppText";
import { DefaultButton } from "../constants/Button";
import COLORS from "../constants/colors";

export default function Onboarding({ navigation }) {
  return (
    <AppSafeAreaView>
      <Image
        source={require("../assets/onboard.png")}
        style={{
          width: "100%",
          marginTop: 70,
          marginBottom: 50,
        }}
      />
      <SemiBoldText style={{ fontSize: 24, marginBottom: -10 }}>
        Welcome to
      </SemiBoldText>
      <BoldText
        style={{ fontSize: 33, color: COLORS.secondary, marginBottom: 30 }}
      >
        FASTAMONI TEST
      </BoldText>

      <DefaultButton
        title="Sign Up"
        onPress={() => navigation.navigate("Signup")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <MediumText
          style={{
            color: COLORS.secondary,
            marginTop: 10,
            textAlign: "center",
          }}
        >
          Login
        </MediumText>
      </TouchableOpacity>
    </AppSafeAreaView>
  );
}
