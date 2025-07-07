import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import TabIcon from "../components/TabIcon";

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#202020",
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          // overflow: "hidden",
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop:10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="home" icon="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Search" icon="search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Saved" icon="save" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Profile" icon="person" />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabImg: {
    height: 15,
    width: 15,
  },
  imgBg: {
    paddingTop: 5,
    paddingBottom: 5,
    width: 80,
    backgroundColor: "#E50914",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderRadius: 20,
  },
  tabTxt: {
    color: "black",
    fontSize: 12,
  },
  tabMain: {
    display: "flex",
  },
});

export default _Layout;
