import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, } from "@react-navigation/stack";
import { Welcome } from "../../../modules/authentication/views/pages/welcome";
import { AppRoutes } from "../appRoutes";
import { Login } from "../../../modules/authentication/views/pages/login";
const { Navigator, Screen  } = createStackNavigator();

export function StackRoutes() {
  return (
      <NavigationContainer>
        <Navigator
          initialRouteName="Welcome"
          screenOptions={{
              headerShown: false 
          }}
        >
        <Screen
          name="Welcome"
          component={Welcome} 
        />
        <Screen
          name="Login"
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