import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { TodosScreen, CreateScreen, TodoScreen } from "./Screens/index";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#18191a" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TodosScreen}
            options={{ headerShown: false, title: "Home list" }}
          />
          <Stack.Screen
            name="Create"
            component={CreateScreen}
            options={{ headerShown: false, title: "Create a new todo" }}
          />
          <Stack.Screen
            name="Todo"
            component={TodoScreen}
            options={{ headerShown: false, title: "Todo home" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
