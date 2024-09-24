import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { AppSafeAreaView } from "../components/AppViews";
import { MediumText, SemiBoldText } from "../components/AppText";
import {
  DefaultInput,
  EmailInput,
  PasswordInput,
} from "../components/AppInput";
import { DefaultButton } from "../constants/Button";
import COLORS from "../constants/colors";
import { BASE_URL } from "../config";
import Spinner from "react-native-loading-spinner-overlay";
import { useDispatch } from "react-redux";
import { setUsername } from "../reducers/userSlice";

export default function Signup({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSignup = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (name) {
        dispatch(setUsername(name));
        console.log("done");
      }

      setIsLoading(false);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Error", error);
      setIsLoading(false);
    }
  };

  return (
    <AppSafeAreaView>
      <Spinner color={COLORS.secondary} visible={isLoading} />
      <SemiBoldText style={{ fontSize: 23, marginTop: 30, marginBottom: 10 }}>
        Welcome to Fastamoni!
      </SemiBoldText>
      <MediumText style={{ marginBottom: 45 }}>
        Sign in here to explore endless financial possibilities.
      </MediumText>
      <DefaultInput
        style={{ marginBottom: 16 }}
        title="Username"
        placeholder="Enter a unique username"
        onChangeText={(val) => setName(val)}
      />
      <EmailInput
        style={{ marginBottom: 16 }}
        title="Email Address"
        placeholder="Enter your email address"
        onChangeText={(val) => setEmail(val)}
      />
      <PasswordInput
        title="Password"
        onChangeText={(val) => setPassword(val)}
      />

      <View style={{ marginTop: 170 }}>
        <DefaultButton
          style={{ marginTop: 35 }}
          title="Sign Up"
          onPress={handleSignup}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <MediumText style={{ fontSize: 13 }}>Already registered? </MediumText>
          <MediumText style={{ fontSize: 13, color: COLORS.secondary }}>
            Login
          </MediumText>
        </TouchableOpacity>
      </View>
    </AppSafeAreaView>
  );
}
