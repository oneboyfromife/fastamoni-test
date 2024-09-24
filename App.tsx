// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Onboarding from "./screens/Onboarding";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import Edit from "./screens/Edit";
import store from "./reducers/store";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Sen-Medium": require("./assets/fonts/BeVietnamPro-Medium.ttf"),
    "Sen-Regular": require("./assets/fonts/BeVietnamPro-Regular.ttf"),
    "Sen-Italic": require("./assets/fonts/BeVietnamPro-MediumItalic.ttf"),

    "Sen-Bold": require("./assets/fonts/BeVietnamPro-Bold.ttf"),
    "Sen-SemiBold": require("./assets/fonts/BeVietnamPro-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Provider store={store}>
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
              gestureDirection: "horizontal",
              animation: "slide_from_right",
            }}
          >
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Edit" component={Edit} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

export default App;
