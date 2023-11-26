import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { Avatar, TextInput } from "react-native-paper";

const CreateGroup = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            marginTop: 12,
            marginLeft: 20,
          }}
        >
          <Avatar.Icon size={64} icon="camera" />
        </TouchableOpacity>

        <View style={{ paddingTop: 32, paddingLeft: 12 }}>
          <TextInput
            style={{
              width: 200,
              height: 30,
              borderRadius: 6,
              fontSize: 16,
              fontWeight: "500",
              color: "#999",
              paddingLeft: 2,
            }}
            placeholder="Enter group name"
            inputMode="numeric"
            keyboardType="phone-pad"
          ></TextInput>
        </View>

        <TouchableOpacity
          style={{
            marginTop: 34,
            marginLeft: 14,
          }}
        >
          <Icon name="sentiment-satisfied" color="#6750A4" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#F0F0F0",
          width: 400,
          height: 40,
          padding: 8,
          marginTop: 16,
          paddingLeft: 20,
        }}
      >
        <Icon size={26} name="history-toggle-off" color="#6750A4" />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "#282828",
            marginLeft: 24,
          }}
        >
          Auto-Delete Messages
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "#6750A4",
            marginLeft: 120,
          }}
        >
          Off
        </Text>
      </View>

      <View style={{ width: 400 }}>
        <Text
          style={{
            color: "#808080",
            fontSize: 14,
            fontWeight: 500,
            marginTop: 12,
            marginLeft: 12,
          }}
        >
          Automatically delete messages in this group for everyone after a
          period of time.
        </Text>
      </View>

      <TouchableOpacity
        style={{ display: "block", top: 280, left: 300 }}
        onPress={() => navigation.goBack()}
      >
        <Avatar.Icon size={48} icon="check" />
      </TouchableOpacity>
    </View>
  );
};

export default CreateGroup;
