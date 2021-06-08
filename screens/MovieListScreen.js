import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { Card } from "react-native-elements";
import { find } from "../api";
import MovieCard from "../movieCard";

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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {title !== "" ? (
          <MovieCard movies={movies} />
        ) : (
          <View style={styles.search}>
            <Button
              style={styles.search}
              title="Search For a Movie"
              onPress={() => navigation.navigate("Search")}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  search: {
    paddingTop: 10,
  },
});
