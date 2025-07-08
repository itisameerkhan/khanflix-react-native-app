import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SearchBar from "../components/SearchBar";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import MovieCard from "../components/MovieCard";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  const renderHeader = () => (
    <View style={styles.header}>
      <Image source={images.bg} style={styles.homeBg} />
      <Image
        source={require("../../assets/icons/logo.png")}
        style={styles.logo}
      />
      <SearchBar
        onPress={() => router.push("/search")}
        placeholder="Search for a Movie"
      />
      <Text style={styles.p1}>Latest Movies</Text>
    </View>
  );

  if (moviesLoading) {
    return <ActivityIndicator size="large" color="#E50914" />;
  }
  if (moviesError) {
    return <Text>Error while fetching.</Text>;
  }

  return (
    <View style={styles.home}>
      <FlatList
      style={styles.flatlist}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard {...item} />}
        numColumns={3}
        ListHeaderComponent={renderHeader}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 20,
          paddingRight: 5,
          marginBottom: 10,
        }}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    padding:10
  },
  header: {
    paddingTop: 70,
  },
  home: {
    backgroundColor: "black",
    flex: 1,
    paddingBottom: 100,
  },
  homeBg: {
    flex: 1,
    position: "absolute",
  },
  scrollView: {
    flex: 1,
    paddingTop: 70,
  },
  logo: {
    height: 110,
    width: "auto",
  },
  p1: {
    color: "white",
    fontSize: 20,
    marginVertical: 20,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  listContent: {
    paddingBottom: 40,
  },
});
