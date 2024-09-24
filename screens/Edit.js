import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { AppSafeAreaView } from "../components/AppViews";
import { BoldText, MediumText, SemiBoldText } from "../components/AppText";
import { DefaultInput } from "../components/AppInput";
import { DefaultButton } from "../constants/Button";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "../reducers/userSlice";

export default function Edit({ navigation }) {
  const dispatch = useDispatch();

  // Get the current username from Redux store
  const currentUsername = useSelector((state) => state.user.username);

  // Local state to hold the new username input
  const [newUsername, setNewUsername] = useState(currentUsername);

  // Function to handle username change
  const handleSaveUsername = () => {
    if (newUsername.trim()) {
      // Dispatch the new username to Redux store
      dispatch(setUsername(newUsername));
      navigation.navigate("Home");
      Alert.alert("Success", "Username updated successfully!");
    } else {
      Alert.alert("Error", "Username cannot be empty");
    }
  };

  return (
    <AppSafeAreaView>
      <SemiBoldText style={{ fontSize: 23, marginTop: 150, marginBottom: 10 }}>
        Edit Profile!
      </SemiBoldText>
      <MediumText style={{ marginBottom: 15 }}>
        Let's get you fixed. Enter your new username.
      </MediumText>
      <DefaultInput
        style={{ marginBottom: 16 }}
        title="Username"
        placeholder="Enter a unique username"
        onChangeText={(val) => setNewUsername(val)}
      />
      <DefaultButton
        style={{ marginTop: 100 }}
        title="Proceed"
        onPress={handleSaveUsername}
      />
    </AppSafeAreaView>
  );
}
