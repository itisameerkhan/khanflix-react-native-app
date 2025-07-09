import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onPress?: () => void;
}

const SearchBar = ({ value, placeholder, onPress, onChangeText }: Props) => {
  return (
    <View style={styles.view}>
      <Icon name="search" size={24} color="white" />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="white"
        style={styles.TextInput}
        value={value}
        onChangeText={onChangeText}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default SearchBar;
