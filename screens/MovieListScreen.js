import React, { useEffect, useState } from "react";
import { Button, View, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";
import { find } from "../api";

export default function MovieListScreen({ navigation, route }) {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);

  getMovies = async (title) => {
    const results = await find(title);
    setMovies([...results]);
  };

  useEffect(() => {
    if (route.params?.title) {
      setTitle(route.params?.title);
      getMovies(route.params?.title);
    }
  }, [route.params?.title]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Movie List</Text>
      <Text style={styles.searchText}>{`You Searched For: ${title}`}</Text>
      <Card style={styles.card}>
        <Card.Title>MOVIE RESULTS</Card.Title>
        <Card.Divider />
        {movies.map((movie, i) => {
          return (
            <View key={i} style={styles.movie}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: movie.poster }}
              />
              <Text style={styles.title}>{movie.title}</Text>
            </View>
          );
        })}
      </Card>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    paddingBottom: 6,
  },
  searchText: {
    fontSize: 18,
  },
  movie: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
  image: {
    borderRadius: 10,
    width: 60,
    height: 80,
  },
  title: {},
});
