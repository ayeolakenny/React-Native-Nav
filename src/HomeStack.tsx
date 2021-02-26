import { createStackNavigator } from "@react-navigation/stack";
import faker from "faker";
import React, { useContext } from "react";
import { Button, FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "./AuthProvider";
import { Center } from "./Center";
import { HomeParamList, HomeStackNavProps } from "./HomeParamList";

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();

function Feed({ navigation }: HomeStackNavProps<"Feed">) {
  return (
    <Center>
      <FlatList
        style={{ width: "100%" }}
        renderItem={({ item }) => {
          return (
            <Button
              title={item}
              onPress={() => {
                navigation.navigate("Product", {
                  name: item,
                });
              }}
            />
          );
        }}
        keyExtractor={(product, idx) => `${product} + ${idx}`}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  );
}

function Product({ route }: HomeStackNavProps<"Product">) {
  return (
    <Center>
      <Text>{route.params.name}</Text>
    </Center>
  );
}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => logout()}>
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            );
          },
        }}
        name="Feed"
        component={Feed}
      />
    </Stack.Navigator>
  );
};
