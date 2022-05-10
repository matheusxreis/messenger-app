import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import * as Component from "./style";

import AddIcon from "../../../../global/assets/icons/add_black.svg";
import { Keyboard } from "react-native";

export function Contacts() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Component.Container
        onPress={Keyboard.dismiss}
        activeOpacity={1}
      >
        <Component.Header>
          <Component.Title>
            Contacts
          </Component.Title>
            <Component.Action>
              <AddIcon/>
            </Component.Action>
        </Component.Header>
        <Component.Body>
          <Component.SearchTextInput
            placeholder="Search"
          />
        </Component.Body>
      </Component.Container>
    </SafeAreaView>
  );
}