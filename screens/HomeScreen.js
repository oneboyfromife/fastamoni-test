import { View, Text } from "react-native";
import React from "react";
import { AppSafeAreaView } from "../components/AppViews";
import { BoldText, SemiBoldText } from "../components/AppText";
import COLORS from "../constants/colors";
import { DefaultButton } from "../constants/Button";
import { useSelector } from "react-redux";

export default function HomeScreen({ navigation }) {
  const username = useSelector((state) => state.user.username);

  return (
    <AppSafeAreaView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <SemiBoldText
          style={{
            fontSize: 24,
            marginBottom: -10,
            marginTop: 60,
          }}
        >
          Welcome,
        </SemiBoldText>
        <BoldText
          style={{ fontSize: 30, color: COLORS.secondary, marginBottom: 30 }}
        >
          {username ? username : "Guest"}
        </BoldText>
        <DefaultButton
          title="Edit Profile"
          onPress={() => navigation.navigate("Edit")}
        />
      </View>
    </AppSafeAreaView>
  );
}
