import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { Icon } from "react-native-elements";
import React from "react";

const Contacts = ({ navigation }) => {
  const [user, setUser] = useState({});

  const handleGetAllUser = () => {
    const url = "https://654dea69cbc3253557420b0d.mockapi.io/AppTelegram";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleGetAllUser();
  }, []);

  useEffect(() => {
    console.log("User: ", user);
  });

  const Item = ({ item }) => {
    return (
      <View style={{ marginLeft: 16, marginTop: 12, width: 356 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{ uri: item.avatar }}
            style={{ width: 50, height: 50, borderRadius: "100%" }}
          />

          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                display: "block",
                fontSize: 18,
                fontWeight: 650,
                color: "#222222",
                left: 14,
              }}
            >
              {item.name}
            </Text>

            <View style={{ marginLeft: 14 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#878F9A",
                }}
              >
                {item.description}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

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
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginTop: 12,
          marginLeft: 20,
          width: 320,
          height: 32,
        }}
        onPress={() => navigation.navigate("NewGroup")}
      >
        <Icon name="group" color="#80868A" />
        <Text style={{ fontSize: 16, fontWeight: 500, paddingLeft: 24 }}>
          New Group
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginTop: 12,
          marginLeft: 20,
          width: 320,
          height: 32,
        }}
        onPress={() => navigation.navigate("CreateSecretChat")}
      >
        <Icon name="lock" color="#80868A" />
        <Text style={{ fontSize: 16, fontWeight: 500, paddingLeft: 24 }}>
          New Secret Chat
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginTop: 12,
          marginLeft: 20,
          width: 320,
          height: 32,
        }}
        onPress={() => navigation.navigate("CreateNewChannel")}
      >
        <Icon name="campaign" color="#80868A" />
        <Text style={{ fontSize: 16, fontWeight: 500, paddingLeft: 24 }}>
          New Channel
        </Text>
      </TouchableOpacity>

      <View
        style={{
          marginTop: 16,
          width: "100%",
          marginBottom: 12,
        }}
      >
        <Text
          style={{
            height: 24,
            fontSize: 16,
            fontWeight: 700,
            color: "#82888A",
            backgroundColor: "#F5F5F5",
            paddingTop: 6,
            paddingBottom: 32,
            paddingLeft: 22,
          }}
        >
          Sorted by last seen time
        </Text>
      </View>

      <FlatList data={user} renderItem={({ item }) => <Item item={item} />} />
    </View>
  );
};

export default Contacts;
