import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Routes } from "../navigation/Route";
import { Button, ButtonGroup, ButtonProps, Text } from "@ui-kitten/components";
import Hour from "./Hour";

interface DayProps extends ButtonProps {
  day: string;
}
export default function Day({ day, onLongPress }: DayProps) {
  return (
    <View style={styles.day}>
      <Text category="h6">{day}</Text>
      <ButtonGroup style={styles.btnGroup}>
        <Hour hour="16" onLongPress={onLongPress} nbCheck={2} />
        <Hour hour="17" onLongPress={onLongPress} nbCheck={2} />
        <Hour hour="18" onLongPress={onLongPress} nbCheck={3} />
        <Hour hour="19" onLongPress={onLongPress} nbCheck={0} />
      </ButtonGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  day: {
    flex: 0.2,
  },
  btnGroup: {
    flexDirection: "row",
  },
});
