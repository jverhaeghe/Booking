import { Button } from "@ui-kitten/components";
import type { ReactNode } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

interface ScreenContainerProps {
  children?: ReactNode;
  withGoBack?: boolean;
}

export const ScreenContainer = ({
  children,
  withGoBack = false,
}: ScreenContainerProps) => {
  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      {withGoBack ?? <Button>GoBack</Button>}
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
