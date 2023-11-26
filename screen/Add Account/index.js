import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";

const AddAccount = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
      }}
    >
      <View>
        <Text style={{ fontSize: 20, fontWeight: 600 }}>Your phone number</Text>
      </View>

      <View style={{ width: 270, marginTop: 12 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "#999",
            paddingLeft: 16,
          }}
        >
          Please confirm your country code
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "#999",
            paddingLeft: 28,
          }}
        >
          and enter your phone number.
        </Text>
      </View>

      <View style={{ marginTop: 30 }}>
        <TextInput
          style={{
            width: 310,
            height: 50,
            borderWidth: 2,
            borderRadius: 6,
            borderColor: "#3DACF1",
            fontSize: 16,
            fontWeight: "500",
            color: "#999",
            paddingLeft: 12,
          }}
          placeholder="Country"
          // inlineImageLeft="../../assets/img/telegram.jpg"
          inputMode="email"
          // selectionColor={0.5}
          // textAlign="left"
          textContentType="countryName"
          // onKeyPress={{ key: "Enter" }}
          keyboardAppearance="dark"
        ></TextInput>
      </View>

      <View style={{ marginTop: 30 }}>
        <TextInput
          style={{
            width: 310,
            height: 50,
            borderWidth: 2,
            borderRadius: 6,
            borderColor: "#3DACF1",
            fontSize: 16,
            fontWeight: "500",
            color: "#999",
            paddingLeft: 12,
          }}
          placeholder="Phone Number"
          inputMode="numeric"
          keyboardType="phone-pad"
        ></TextInput>
      </View>

      <View
        style={{
          width: 300,
          height: 30,
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 30,
        }}
      >
        <form style={{ marginTop: 2 }}>
          <input type="checkbox" />
        </form>

        <Text style={{ fontSize: 18, fontWeight: 500, paddingLeft: 8 }}>
          Sync Contacts
        </Text>
      </View>

      <TouchableOpacity
        style={{ display: "block", top: 60, left: 120 }}
        onPress={() => navigation.navigate("User")}
      >
        <Image
          source={require("../../assets/img/arrow_right.jpg")}
          style={{ width: 64, height: 64 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddAccount;
