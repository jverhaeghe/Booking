import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

import GlobalStyle from "../utils/GlobalStyle";

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 2000);
  }, []);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>MileageManager</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e89f00",
  },
  text: {
    fontSize: 40,
    color: "#ffffff",
  },
});
