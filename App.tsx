import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as eva from "@eva-design/eva";
import { Navigator } from "./src/navigation/Navigator";
import { AuthenticationProvider } from "./src/context/Authentication";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ScreenContainer } from "./src/components/ScreenContainer";
export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <AuthenticationProvider>
        <ApplicationProvider {...eva} theme={eva.light}>
          <View style={styles.container}>
            <Navigator></Navigator>
          </View>
        </ApplicationProvider>
      </AuthenticationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },
});
