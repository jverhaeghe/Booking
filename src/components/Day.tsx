import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Routes } from "../navigation/Route";
import { ButtonGroup } from "@ui-kitten/components";
import Hour from "./Hour";

export default function Day() {
  const day = "mardi 8";

  return (
    <View>
      <Text>{day}</Text>
      <ButtonGroup style={styles.btnGroup}>
        <Hour hour="16" nbCheck={2} />
        <Hour hour="17" nbCheck={2} />
        <Hour hour="18" nbCheck={3} />
        <Hour hour="19" nbCheck={0} />
      </ButtonGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  btnGroup: {
    backgroundColor: "#eee111",
    flexDirection: "row",
  },
});
