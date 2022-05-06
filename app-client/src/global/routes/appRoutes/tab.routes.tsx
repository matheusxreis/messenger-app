import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import  { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Contacts } from "../../../modules/contacts/views/pages";
import { Chat } from "../../../modules/chat/views/pages";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
  <NavigationContainer>
      <Navigator initialRouteName="Chat">
      <Screen
        name="Contacts"
        component={Contacts}
      />
      <Screen
        name="Chat"
        component={Chat}
      />
    </Navigator>
  </NavigationContainer>
  );
}