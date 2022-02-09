import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { Routes } from "../navigation/Route";
import { Text } from "@ui-kitten/components";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(Routes.LOGIN_SCREEN);
    }, 1000);
  }, []);

  return (
    <View style={styles.splashContainer}>
      <Text style={styles.text} category="h1">
        CDC BOOKING
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    backgroundColor: "#eda600",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 2,
    color: "#FFFFFF",
    textAlign: "center",
  },
});
