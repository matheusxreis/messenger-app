import React from "react";
import  { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Contacts } from "../../../modules/contacts/views/pages";
import { Chat } from "../../../modules/chat/views/pages";

import ChatIcon from "../../assets/icons/chat.svg";
import ContactsIcon from "../../assets/icons/contacts.svg";
import ChatIconActive from "../../assets/icons/chat_active.svg";
import ContactsIconActive from "../../assets/icons/contacts_active.svg";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
      <Navigator
        initialRouteName="Chat"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let Icon;
            if(route.name === "Chat") {
              Icon = focused ? ChatIconActive : ChatIcon
            } else if(route.name === "Contacts") {
              Icon = focused ? ContactsIconActive : ContactsIcon
            }
            return <Icon/>
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 55,
          }
        })}
        >
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