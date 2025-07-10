import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import React, { useEffect, useMemo, useState } from "react";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { updateSearchCount } from "@/services/appwrite";

const search = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  const renderHeader = useMemo(
    () => (
      <View style={styles.header}>
        <Image source={images.bg} style={styles.homeBg} />
        <Image
          source={require("../../assets/icons/logo.png")}
          style={styles.logo}
        />
        <SearchBar
          placeholder="Search for a movie"
          value={searchQuery}
          onChangeText={(text: string) => setSearchQuery(text)}
        />
        <Text style={styles.p1}>
          Search results for{" "}
          <Text style={{ color: "#AB8BFF" }}>{searchQuery}</Text>
        </Text>
      </View>
    ),
    [searchQuery]
  );

  useEffect(() => {
    if (searchQuery.trim()) {
      updateSearchCount(searchQuery, movies);
    }

    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // if (moviesLoading) {
  //   return <ActivityIndicator size="large" color="#E50914" />;
  // }
  if (moviesError) {
    return <Text>Error while fetching.</Text>;
  }
  return (
    <View style={styles.main}>
      <Image source={images.bg} style={styles.bgImg} />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        style={styles.flatList}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 150 }}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#000",
  },
  bgImg: {
    position: "absolute",
    top: 1,
  },
  flatList: {
    padding: 10,
    marginVertical: 20,
  },
  homeBg: {
    flex: 1,
    position: "absolute",
  },
  logo: {
    height: 110,
    width: "auto",
  },
  header: {
    paddingTop: 70,
  },
  p1: {
    color: "white",
    fontSize: 20,
    marginVertical: 20,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  TextInput: {
    flex: 1,
    color: "white",
  },
  view: {
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
  },
});

export default search;
