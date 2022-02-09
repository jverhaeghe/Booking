import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Routes } from "../navigation/Route";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(Routes.LOGIN_SCREEN);
    }, 500);
  }, []);

  return (
    <View>
      <Text>CDC BOOKING</Text>
    </View>
  );
}
