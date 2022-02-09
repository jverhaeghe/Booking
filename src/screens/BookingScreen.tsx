import React from "react";
import { View, Text, Alert } from "react-native";
import Day from "../components/Day";
import { ScreenContainer } from "../components/ScreenContainer";
import { Routes } from "../navigation/Route";

export default function BookingScreen({ navigation }) {
  const handlePressHour = () => {
    navigation.navigate(Routes.BOOKING_DETAIL_SCREEN);
  };

  return (
    <ScreenContainer>
      <Day day="Mardi 15 février" onLongPress={handlePressHour} />
      <Day day="Mercredi 16 février" onLongPress={handlePressHour} />
      <Day day="Jeudi 17 février" onLongPress={handlePressHour} />
      <Day day="Vendredi 18 février" onLongPress={handlePressHour} />
      <Day day="Samedi 19 février" onLongPress={handlePressHour} />
    </ScreenContainer>
  );
}
