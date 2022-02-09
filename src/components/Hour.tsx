import React, { Fragment, useState } from "react";
import { View, Text, StyleSheet, GestureResponderEvent } from "react-native";

import { Button, ButtonProps, Icon } from "@ui-kitten/components";

interface HourProps extends ButtonProps {
  hour: string;
  nbCheck: number;
}

export default function Hour({ hour, nbCheck, onLongPress }: HourProps) {
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
      style={styles.hour}
      onPress={handleCheck}
      onLongPress={onLongPress}
      status={isChecked === true ? "success" : "danger"}
    >
      {(evaProps) => (
        <Text {...evaProps}>{isChecked === true ? "v" : hour}</Text>
      )}
    </Button>
  );
}

const styles = StyleSheet.create({
  hour: {
    flex: 1,
    margin: 2,
  },
});
