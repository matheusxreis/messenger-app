import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import  { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Contacts } from "../../../modules/contacts/views/pages";
import { Chat } from "../../../modules/chat/views/pages";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
      <Navigator initialRouteName="Chat">
        <Screen
          name="Chat"
          component={Chat}
        />
      <Screen
        name="Contacts"
        component={Contacts}
      />
    </Navigator>
  );
}