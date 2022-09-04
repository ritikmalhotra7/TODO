import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function TodoItem(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.pressHandler(props.item.key);
      }}
    >
      <Text style={styles.item}>{props.item.text}</Text>
      <Entypo name="cross" size={24} color="black" />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    flex: 1,
  },
  container: {
    width: "100%",
    flex: 1,
    padding: 15,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
  },
});
