import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild style={styles.card}>
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
        <Text style={styles.p1} numberOfLines={1}>{title}</Text>
        <View style={styles.rating}>
          <Icon name="star" color="gold" size={18} />
          <Text style={styles.p1}>{Math.round(vote_average)}</Text>
        </View>
        <View>
          <Text style={styles.p2}>{release_date.split("-")[0]}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  p1: {
    color: "white",
  },
  p2: {
    color:"gray"
  },
  poster: {
    height: 250,
    width: "100%",
    borderRadius: 10
  },
  card: {
    width:"30%",
    marginVertical: 10
  },
  rating: {
    display:"flex",
    flexDirection:"row",
    gap:5,
    marginVertical:3
  }
});
export default MovieCard;
