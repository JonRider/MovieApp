import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

import MovieListScreen from "./screens/MovieListScreen";
import DetailsScreen from "./screens/DetailsScreen";

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

export default class App extends React.Component {
  // state = {
  //   movies,
  // };

  // addContact = newContact => {
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, newContact]
  //   }));
  // };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Movies">
          <Stack.Screen name="Movies" component={MovieListScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
