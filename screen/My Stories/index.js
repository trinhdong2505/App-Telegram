import { View, Text, Image } from "react-native";
import React from "react";

const MyStories = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: 478,
        flexWrap: "wrap",
        marginLeft: 8,
      }}
    >
      <View style={{ padding: 2 }}>
        <Image
          source={require("../../assets/img/coffee.jpg")}
          resizeMode="cover"
          style={{ width: 120, height: 120, borderRadius: 1 }}
        />
      </View>

      <View style={{ padding: 2 }}>
        <Image
          source={require("../../assets/img/coffee_1.jpg")}
          resizeMode="cover"
          style={{ width: 120, height: 120, borderRadius: 1 }}
        />
      </View>

      <View style={{ padding: 2 }}>
        <Image
          source={require("../../assets/img/highland.jpg")}
          resizeMode="cover"
          style={{ width: 120, height: 120, borderRadius: 1 }}
        />
      </View>

      <View style={{ padding: 2 }}>
        <Image
          source={require("../../assets/img/beach_nhatrang.jpg")}
          resizeMode="cover"
          style={{ width: 120, height: 120, borderRadius: 1 }}
        />
      </View>

      <View style={{ padding: 2 }}>
        <Image
          source={require("../../assets/img/beach_nhatrang_1.jpg")}
          resizeMode="cover"
          style={{ width: 120, height: 120, borderRadius: 1 }}
        />
      </View>

      <View style={{ padding: 2 }}>
        <Image
          source={require("../../assets/img/tuong.jpg")}
          resizeMode="cover"
          style={{ width: 120, height: 120, borderRadius: 1 }}
        />
      </View>

      <View style={{ padding: 2 }}>
        <Image
          source={require("../../assets/img/tuong_1.jpg")}
          resizeMode="cover"
          style={{ width: 120, height: 120, borderRadius: 1 }}
        />
      </View>

      <View style={{ padding: 2 }}>
        <Image
          source={require("../../assets/img/universe.jpg")}
          resizeMode="cover"
          style={{ width: 120, height: 120, borderRadius: 1 }}
        />
      </View>

      <View style={{ padding: 2 }}>
        <Image
          source={require("../../assets/img/universe_1.jpg")}
          resizeMode="cover"
          style={{ width: 120, height: 120, borderRadius: 1 }}
        />
      </View>

      <View style={{ padding: 2 }}>
        <Image
          source={require("../../assets/img/universe_2.jpg")}
          resizeMode="cover"
          style={{ width: 120, height: 120, borderRadius: 1 }}
        />
      </View>

      <View style={{ padding: 2 }}>
        <Image
          source={require("../../assets/img/universe_3.jpg")}
          resizeMode="cover"
          style={{ width: 120, height: 120, borderRadius: 1 }}
        />
      </View>

      <View style={{ padding: 2 }}>
        <Image
          source={require("../../assets/img/forest.jpg")}
          resizeMode="cover"
          style={{ width: 120, height: 120, borderRadius: 1 }}
        />
      </View>

      <View style={{ padding: 2 }}>
        <Image
          source={require("../../assets/img/forest_1.jpg")}
          resizeMode="cover"
          style={{ width: 120, height: 120, borderRadius: 1 }}
        />
      </View>

      <View style={{ padding: 2 }}>
        <Image
          source={require("../../assets/img/forest_2.jpg")}
          resizeMode="cover"
          style={{ width: 120, height: 120, borderRadius: 1 }}
        />
      </View>

      <View style={{ padding: 2 }}>
        <Image
          source={require("../../assets/img/forest_3.jpg")}
          resizeMode="cover"
          style={{ width: 120, height: 120, borderRadius: 1 }}
        />
      </View>
    </View>
  );
};

export default MyStories;
