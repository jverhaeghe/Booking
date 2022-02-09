import React, { Fragment, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Routes } from "../navigation/Route";
import { Button, Icon } from "@ui-kitten/components";

interface HourProps {
  hour: string;
  nbCheck: number;
}

export default function Hour({ hour, nbCheck }: HourProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);

    console.log(nbCheck);
    // check or uncheck button
    // if  0 => error
    // if x > 1 & x < 3 => warning
    // if x > 3 => success
  };

  return (
    <Button
      style={styles.children}
      onPress={handleCheck}
      status={isChecked === true ? "success" : "danger"}
    >
      {(evaProps) => (
        <Text {...evaProps}>{isChecked === true ? "v" : hour}</Text>
      )}
    </Button>
  );
}

const styles = StyleSheet.create({
  children: {
    flex: 1,
  },
});
