import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movie/${id}`} asChild style={styles.card}>
      <TouchableOpacity>
        <Image
          style={styles.poster}
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          resizeMode="cover"
        />
        <Text style={styles.p1}>{title}</Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  p1: {
    color: "white",
  },
  poster: {
    height: 250,
    width: "100%",
    borderRadius: 10
  },
  card: {
    width:"30%",
    marginVertical: 10
  }
});
export default MovieCard;
