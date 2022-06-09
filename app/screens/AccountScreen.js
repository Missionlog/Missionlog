import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItems from "../comp/ListItems";
import Screen from "../comp/Screen";
import colors from "../config/colors";
import Icon from "../comp/Icon";
import ListItemSeparator from "../comp/ListItemSeparator";
import Colors from "../config/colors";

const menuItems = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: Colors.secondary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: Colors.primary,
    },
    targetScreen: "Messages",
  },
];
export default function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItems
          title={user.name}
          subTitle={user.email}
          image={require("../assets/officialfavy02_1625230406327650.jpg")}
        />
      </View>
      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItems
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>

      <View>
        <ListItems
          title="Log out"
          IconComponent={
            <Icon name="logout" backgroundColor={colors.primary} />
          }
          onPress={() => logOut()}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "lightgray",
  },
  container: {
    marginVertical: 5,
  },
});
