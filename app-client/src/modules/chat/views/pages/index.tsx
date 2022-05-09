import React from "react";
import DropShadow from "react-native-drop-shadow";

import * as Component from "./style";

export function Chat() {
  return (
    <Component.Container>
      <DropShadow
        style={{
          shadowColor: "#000000",
          shadowOffset: {
            width: 10,
            height: 10
          },
          shadowOpacity: 1,
          shadowRadius: 5,
        }}
      >
        <Component.Header>
          <Component.Title>CHAT</Component.Title>
        </Component.Header>
      </DropShadow>
      <Component.ChatArea>
        <Component.Title>CHAT AREA</Component.Title>
      </Component.ChatArea>
    </Component.Container>
  );
}