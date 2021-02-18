import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TodoItem } from "../components/index";
const TodosScreen = ({ navigation }) => {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    async function getStorage() {
      const todos = await AsyncStorage.getItem("todos");
      if (todos) {
        setList(JSON.parse(todos));
      }
    }
    getStorage();
  }, []);

  const addTodo = async (title, body, goback) => {
    if (
      !title.trim() ||
      !body.trim() ||
      title.length === 0 ||
      title.length === 0
    ) {
      return;
    } else {
      const newTodo = [{ title, body }, ...list];
      setList(newTodo);
      try {
        await AsyncStorage.setItem("todos", JSON.stringify(newTodo));
      } catch (err) {}
      goback();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de anotações</Text>
        <Button
          title="Adcionar"
          color="#ee9e25"
          onPress={() => navigation.navigate("Create", { addTodo })}
        />
      </View>
      <View style={styles.list}>
        <ScrollView>
          {list.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate("Todo", {
                  title: item.title,
                  body: item.body,
                })
              }
            >
              <TodoItem title={item.title} keyValue={index} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18191a",
    paddingHorizontal: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#fff",
    borderBottomWidth: 0.5,
    paddingVertical: 10,
  },
  title: {
    color: "#fff",
    fontSize: 25,
  },
  list: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
});

export default TodosScreen;
