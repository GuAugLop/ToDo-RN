import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TodoItem = ({ title, keyValue }) => {
  return (
    <View style={styles.container} key={keyValue}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ee9e25",
    marginTop: 2,
    borderRadius: 5,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
