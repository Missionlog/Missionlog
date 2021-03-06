import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import defaultStyles from "../config/styles";

export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={[styles.button]}>
      <Text style={styles.text} onPress={onPress}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 25,
    backgroundColor: defaultStyles.color.secondary,
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: defaultStyles.color.black,
    textTransform: "uppercase",
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
