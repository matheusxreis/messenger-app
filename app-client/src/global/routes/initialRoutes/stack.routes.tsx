import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, } from "@react-navigation/stack";
import { Login } from "../../../modules/authentication/views/pages";
import { AppRoutes } from "../appRoutes";
const { Navigator, Screen  } = createStackNavigator();

export function StackRoutes() {
  return (
      <NavigationContainer>
        <Navigator
          initialRouteName="Authentication"
          screenOptions={{
              headerShown: false 
          }}
        >
        <Screen
          name="Authentication"
          component={Login} 
        />
        <Screen 
          name="App" 
          component={AppRoutes}
        />
        </Navigator>
      </NavigationContainer>
  );
}