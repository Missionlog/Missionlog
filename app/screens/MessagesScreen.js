import React, { useState } from "react";
import { FlatList } from "react-native";

import ListItems from "../comp/ListItems";
import Screen from "../comp/Screen";
import ListItemSeparator from "../comp/ListItemSeparator";
import DeleteActions from "../comp/DeleteAction";

const initialMessages = [
  {
    id: "Opara Ada",
    title: "Handsome n Hs like",
    descrption: "Hey is this item still available",
    image: require("../assets/Favour.jpeg"),
  },
  {
    id: "Opara Favour",
    title: "A good lady",
    descrption: "Yes of course ,are you interested ?",
    image: require("../assets/Favour.jpeg"),
  },
];

export default function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setReFreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItems
            title={item.id}
            subTitle={item.descrption}
            image={item.image}
            onPress={() => console.log("message selected ", item)}
            renderRightActions={() => (
              <DeleteActions
                onPress={() => {
                  handleDelete(item);
                }}
              />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: "Opara Favour",
              title: "A good lady",
              descrption: "She is calm",
              image: require("../assets/Favour.jpeg"),
            },
          ])
        }
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}
