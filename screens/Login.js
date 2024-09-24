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

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);

    fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((res) => {
        console.log(res);
        navigation.navigate("Home");
        setIsLoading(false);
      })
      .catch((error) => {
        Alert.alert({ error });
        setIsLoading(false);
      });
  };

  return (
    <AppSafeAreaView>
      <Spinner color={COLORS.secondary} visible={isLoading} />
      <SemiBoldText style={{ fontSize: 23, marginTop: 30, marginBottom: 10 }}>
        Welcome back!
      </SemiBoldText>
      <MediumText style={{ marginBottom: 45 }}>
        Login to continue to explore endless financial possibilities.
      </MediumText>
      <DefaultInput
        style={{ marginBottom: 16 }}
        title="Username"
        placeholder="Enter a unique username"
        onChangeText={(val) => setUsername(val)}
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
          title="Login"
          onPress={handleLogin}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Signup")}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <MediumText style={{ fontSize: 13 }}>New here? </MediumText>
          <MediumText style={{ fontSize: 13, color: COLORS.secondary }}>
            Sign in
          </MediumText>
        </TouchableOpacity>
      </View>
    </AppSafeAreaView>
  );
}
