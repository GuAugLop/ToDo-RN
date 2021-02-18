import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class TodoScreen extends React.Component {
  render() {
    const { route, navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.title}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{route.params.title}</Text>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <Text style={styles.bodyText}>{route.params.body}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

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
  body: {
    width: "100%",
    height: "100%",
  },
  bodyText: {
    color: "#fff",
    width: "100%",
  },
});
export default TodoScreen;
