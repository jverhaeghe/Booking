import React from "react";

import { FlatList } from "react-native-gesture-handler";
import { ScreenContainer } from "../components/ScreenContainer";
import { Text, Icon, List, ListItem } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export default function BookingDetailScreen({ navigation }) {
  const Item = ({ item }) => <Text>{item.name}</Text>;

  const data = {
    day: "Mercredi 16 fevrier ",
    people: [
      { id: 0, name: "Claire", description: "Demonteuse de pneu professionel" },
      { id: 1, name: "Labhib", description: "Spécialiste du tiramisu" },
      { id: 2, name: "Victoria", description: "Grande amatrice de café" },
    ],
  };

  const renderItemIcon = (props) => <Icon {...props} name="person" />;

  const renderItem = ({ item, index }) => (
    <ListItem
      title={item.name}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderItemIcon}
    />
  );

  return (
    <ScreenContainer>
      <Text category="h5">Liste des personnes présentes le {data.day}</Text>

      <List style={styles.list} data={data.people} renderItem={renderItem} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  list: {
    margin: 15,
  },
});
