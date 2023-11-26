import React from "react";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/Login";
import CreateGroup from "../screen/Create Group";
import DrawerStack from "./DrawerStack";
import NewGroup from "../screen/New Group";
import CreateSecretChat from "../screen/Create Secret Chat";
import CreateNewChannel from "../screen/Create New Channel";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="DrawerStack"
        options={{ headerShown: false }}
        component={DrawerStack}
      />
      <Stack.Screen
        name="CreateGroup"
        component={CreateGroup}
        options={{
          headerTitle: "Create Group",
          headerStyle: {
            backgroundColor: "#6750A4",
          },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="NewGroup"
        component={NewGroup}
        options={{
          headerTitle: "New Group",
          headerStyle: {
            backgroundColor: "#517DA2",
          },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="CreateSecretChat"
        component={CreateSecretChat}
        options={{
          headerTitle: "New Secret Chat",
          headerRight: () => (
            <TouchableOpacity>
              <Icon name="search" style={{ marginRight: 60 }} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#517DA2",
          },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="CreateNewChannel"
        component={CreateNewChannel}
        options={{
          headerTitle: "Create New Channel",
          headerStyle: {
            backgroundColor: "#6750A4",
          },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
