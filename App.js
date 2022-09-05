import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import React, { useState, useEffect } from "react";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
import * as Font from "expo-font";
import {AppLoading} from 'expo';



export default function App() {
  //custom fonts- you have to load them first
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const getFonts = () => {
    Font.loadAsync({
      "jetBrains-regular": require("./assets/fonts/JetBrainsMono-Regular.ttf"),
    });
    setFontsLoaded(true);
  };
  useEffect(() => {
    getFonts();
  }, []);

  const [todos, setTodos] = useState([]);
  /* remove the item with a key from the list and set the list through hooks */
  /* this is a function wiht params = key */
  const pressHandler = (key) => {
    //this is a state to set the list
    //this prevTodos is inbuilt
    setTodos((prevTodos) => {
      const todoList = prevTodos.filter((todo) => todo.key != key);
      return todoList;
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return fontsLoaded ? (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={(props) => (
              <TodoItem /* these all are the props for the function */
                item={props.item}
                pressHandler={pressHandler}
              />
            )}
          />
        </View>
      </View>
    </View>
  ) : (
    <></>
    // <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {},
});
