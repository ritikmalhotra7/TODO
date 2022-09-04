import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

export default function AddTodo(props) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={StyleSheet.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button
        title="add Todo"
        onPress={() => {
          props.submitHandler(text);
        }}
        color="coral"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
