import { View, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

const User = () => {
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

            <View style={{marginLeft: 14}}>
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
      <View style={{ padding: 18 }}>
        <Text style={{ fontSize: 16, fontWeight: 600, color: "#3995D5" }}>
          Your contacts on Telegram
        </Text>
      </View>

      <FlatList data={user} renderItem={({ item }) => <Item item={item} />} />
    </View>
  );
};

export default User;
