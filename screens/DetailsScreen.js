import React, { useState, useEffect } from "react";
import { Text, View, Button, Image, StyleSheet, StatusBar } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState(
    "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
  );

  useEffect(() => {
    if (route.params?.movie) {
      setTitle(route.params?.movie.title);
      setYear(route.params?.movie.year);
      setPoster(route.params?.movie.poster);
    }
  }, [route.params?.movie]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: poster,
        }}
      />
      <Text style={styles.title}>
        {title} ({year})
      </Text>
      <Button
        title="Go back to movies list"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  movie: {
    fontSize: 16,
  },
  image: {
    borderRadius: 10,
    width: 180,
    height: 320,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
  },
});
