import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { Routes } from "./Route";

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import BookingScreen from "../screens/BookingScreen";

const RootStack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={Routes.BOOKING_SCREEN} // on défini ici l'ecran a afficher par defaut
      >
        <RootStack.Screen
          name={Routes.SPLASH_SCREEN}
          component={SplashScreen}
        />
        <RootStack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
        <RootStack.Screen
          name={Routes.BOOKING_SCREEN}
          component={BookingScreen}
        />
        {/* <RootStack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
        <RootStack.Screen name={Routes.BOOKING_SCREEN} component={} />
        <RootStack.Screen
          name={Routes.STARSHIP_DETAIL_SCREEN}
          component={StarshipDetailScreen}
        /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
