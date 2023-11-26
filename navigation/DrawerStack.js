import React from "react";
import { Image, processColor } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import User from "../screen/User/index.js";
import AddAccount from "../screen/Add Account/index.js";
import MyStories from "../screen/My Stories/index.js";
import NewGroup from "../screen/New Group/index.js";
import Contacts from "../screen/Contacts/index.js";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import DrawerContent from "./DrawerContent.js";

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
          width: 240,
        },
        drawerActiveBackgroundColor: "#A0E9FF",
        drawerActiveTintColor: "#22092C",
      }}
    >
      <Drawer.Screen
        name="User"
        component={User}
        options={{
          drawerIcon: () => <Icon name="person" size={30} color="#999" />,
          headerRight: () => (
            <Image
              source={require("../assets/img/telegram.jpg")}
              style={{ width: 30, height: 30, display: "block", right: 240 }}
            />
          ),
          headerStyle: {
            backgroundColor: "#517DA2",
          },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="Add Account"
        component={AddAccount}
        options={{
          drawerIcon: () => <Icon name="add" size={30} color="#999" />,
          headerStyle: {
            backgroundColor: "#517DA2",
          },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="My Stories"
        component={MyStories}
        options={{
          drawerIcon: () => <Icon name="schedule" size={30} color="#999" />,
          headerStyle: {
            backgroundColor: "#517DA2",
          },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="New Group"
        component={NewGroup}
        options={{
          drawerIcon: () => <Icon name="group" size={30} color="#999" />,
          headerStyle: {
            backgroundColor: "#517DA2",
          },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="Contacts"
        component={Contacts}
        options={{
          drawerIcon: () => <Icon name="contacts" size={30} color="#999" />,
          headerStyle: {
            backgroundColor: "#517DA2",
          },
          headerTintColor: "white",

          headerRight: () => (
            <TouchableOpacity>
              <Icon name="search" style={{ marginRight: 60 }} />
            </TouchableOpacity>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
