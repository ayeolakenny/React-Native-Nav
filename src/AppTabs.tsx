import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import { Button, Text } from "react-native";
import { AppParamList } from "./AppParamList";
import { AuthContext } from "./AuthProvider";
import { Center } from "./Center";
import { AntDesign, Ionicons, EvilIcons } from "@expo/vector-icons";
import { HomeStack } from "./HomeStack";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

function Search() {
  return (
    <Center>
      <Text>Search</Text>
    </Center>
  );
}

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "Home";
            return <AntDesign name="home" size={size} color={color} />;
          } else if (route.name === "Search") {
            return <EvilIcons name="search" size={size} color={color} />;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  );
};
