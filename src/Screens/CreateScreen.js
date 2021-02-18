import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const TodosScreen = ({ route, navigation: { goBack } }) => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const { addTodo } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}>
          <Text style={styles.title}>←</Text>
        </TouchableOpacity>
        <Button
          title="Criar"
          color="#ee9e25"
          onPress={() => {
            addTodo(title, body, goBack);
          }}
        />
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.titleInput}
          autoFocus={false}
          placeholderTextColor="gray"
          placeholder="Título"
          value={title}
          onChangeText={(text) => {
            setTitle(text);
          }}
        />
        <TextInput
          style={styles.bodyInput}
          placeholderTextColor="gray"
          autoFocus={false}
          multiline={true}
          placeholder="Descreva aqui..."
          value={body}
          onChangeText={(text) => {
            setBody(text);
          }}
        />
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
    paddingVertical: 10,
    borderBottomColor: "#c1c1c1",
    borderBottomWidth: 1,
  },
  title: {
    color: "#ee9e25",
    fontSize: 25,
  },
  body: {
    display: "flex",
    flexDirection: "column",
  },
  titleInput: {
    color: "#fff",
    width: "100%",
  },
  bodyInput: {
    color: "#fff",
    width: "100%",
  },
});

export default TodosScreen;
