import { View, Text, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerSection,
} from "@react-navigation/drawer";

export default function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: "column",
            height: 140,
            backgroundColor: "#517DA2",
            paddingTop: 16,
            paddingLeft: 16,
            marginBottom: 8,
          }}
        >
          <Image
            source={require("../assets/img/avatar.jpg")}
            style={{ width: 56, height: 56 }}
          />
          <View style={{ paddingTop: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: 500, color: "#F7FDFD" }}>
              User
            </Text>
          </View>

          <View style={{ paddingTop: 12 }}>
            <Text style={{ color: "#B9DFFA", fontSize: 12, fontWeight: 300 }}>
              +84 93 4961715
            </Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
