import React from "react";
import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
const { Screen, Navigator } = createStackNavigator();

 function Authentication() {
  return (
    <View>
      <Text>Auth</Text>
    </View>
  );
}

function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

export function InitialRoutes() {
  return (
      // <Navigator>
      //   <Screen
      //     name="Authentication"
      //     component={Authentication} 
      //   />
      //   <Screen 
      //     name="App" 
      //     component={App}
      //   />
      // </Navigator>
      <Text>Opa</Text>
  );
}