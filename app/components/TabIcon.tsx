import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const TabIcon = ({ title, icon, focused }) => {
  if (focused) {
    return (
      <ImageBackground style={styles.imgBg}>
        <Icon name={icon} size={24} color="white" />
        <Text style={styles.tabTxt}>{title}</Text>
      </ImageBackground>
    );
  } else {
    return (
      <View>
        <Icon name={icon} size={24} color="white" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  tabImg: {
    height: 15,
    width: 15,
    color: "white",
  },
  imgBg: {
    paddingTop: 5,
    paddingBottom: 5,
    width: 80,
    backgroundColor: "red",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderRadius: 50,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  tabTxt: {
    color: "white",
    fontSize: 12,
  },
  tabMain: {
    display: "flex",
  },
});

export default TabIcon;
