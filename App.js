import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

import MovieListScreen from "./screens/MovieListScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SearchScreen from "./screens/SearchScreen";

const Stack = createStackNavigator();

// MainStack.navigationOptions = {
//   tabBarIcon: ({ focused, tintColor }) => (
//     <Ionicons
//       name={`ios-contacts${focused ? "" : "-outline"}`}
//       size={25}
//       color={tintColor}
//     />
//   )
// };

// const AppNavigator = createBottomTabNavigator(
//   {
//     Movies: MainStack,
//     Settings: SettingsScreen
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: "#a41034"
//     }
//   }
// );

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Movies">
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen
          name="Movies"
          component={MovieListScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Button
                title="Search"
                onPress={() => navigation.navigate("Search")}
                color="#fff"
              />
            ),
          })}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
