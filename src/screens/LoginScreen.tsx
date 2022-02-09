import React, { useState } from "react";
import {
  ApplicationProvider,
  Layout,
  Text,
  Input,
  Button,
} from "@ui-kitten/components";
import { useAuthentication } from "../context/Authentication";
import { Routes } from "../navigation/Route";
import { ScreenContainer } from "../components/ScreenContainer";
import { StyleSheet } from "react-native";

// interface LoginScreenProps {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   navigation: any;
// }

export default function LoginScreen({ navigation }) {
  const { setUser } = useAuthentication();
  const [login, setLogin] = useState("");

  const OnPressConnect = () => {
    // si on a une valeur dans l'input on l'ajoute dans le contexte et on part sur la vu Booking
    if (login != "") {
      console.log(" Hey " + login + "Welcome to booking app");
      setUser(login);
      navigation.navigate(Routes.BOOKING_SCREEN);
    }
  };

  const OnKeyPress = () => {};

  return (
    <ScreenContainer>
      <Input
        onChangeText={(value) => setLogin(value)}
        textStyle={{}}
        label={(evaProps) => <Text {...evaProps}>Pseudonyme</Text>}
      />
      <Button style={styles.btn} onPress={OnPressConnect}>
        {(evaProps) => <Text {...evaProps}>Se connecter</Text>}
      </Button>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  btn: {
    margin: 10,
  },
});
