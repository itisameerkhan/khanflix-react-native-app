import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.home}>
      <Image source={images.bg} style={styles.homeBg} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ minHeight: "100%", padding: 10 }}
      >
        <Image
          source={require("../../assets/icons/logo.png")}
          style={styles.logo}
        />
        <SearchBar
          onPress={() => router.push("/search")}
          placeholder="Search for a Movie"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "black",
    flex: 1,
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
});
