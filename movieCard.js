import React from "react";
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

export default function MovieCard(props) {
  return (
    <Card style={styles.card}>
      <Card.Title>MOVIE RESULTS</Card.Title>
      <Card.Divider />
      {props.movies.map((movie, i) => {
        return (
          <View key={i} style={styles.movie}>
            <Text
              style={styles.title}
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="clip"
            >
              <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: movie.poster }}
              />
              {movie.title} ({movie.year})
            </Text>
          </View>
        );
      })}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    paddingBottom: 6,
  },
  movie: {
    fontSize: 16,
    paddingBottom: 4,
  },
  image: {
    borderRadius: 10,
    width: 60,
    height: 80,
    flexBasis: "40%",
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
    paddingLeft: 20,
    paddingTop: 10,
  },
});
