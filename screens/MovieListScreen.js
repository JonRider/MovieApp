import React, { useEffect, useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Api from "../Api";

export default function MovieListScreen({ navigation, route }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (route.params?.title) {
      setTitle(route.params?.title);
    }
  }, [route.params?.title]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Movie List</Text>
      <Api />
      <Text>{`Your Movie: ${title}`}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
