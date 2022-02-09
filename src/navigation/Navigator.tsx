import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { Routes } from "./Route";

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import BookingScreen from "../screens/BookingScreen";
import BookingDetailScreen from "../screens/BookingDetailScreen";

const RootStack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={Routes.SPLASH_SCREEN} // on défini ici l'ecran a afficher par defaut
      >
        <RootStack.Screen
          name={Routes.SPLASH_SCREEN}
          component={SplashScreen}
          options={{
            // dans le cas de l'ecran d'accueil, je demande a ne pas afficher le header de la navigation
            headerShown: false,
          }}
        />
        <RootStack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
        <RootStack.Screen
          name={Routes.BOOKING_SCREEN}
          component={BookingScreen}
        />
        <RootStack.Screen
          name={Routes.BOOKING_DETAIL_SCREEN}
          component={BookingDetailScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
