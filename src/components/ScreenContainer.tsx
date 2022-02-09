import type { ReactNode } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

interface ScreenContainerProps {
  children?: ReactNode;
}

export const ScreenContainer = ({ children }: ScreenContainerProps) => {
  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      {children}

      {/* <Offline /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
