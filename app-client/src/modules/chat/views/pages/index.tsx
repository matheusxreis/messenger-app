import React from "react";

import * as Component from "./style";

import SearchIcon from "../../../../global/assets/icons/search.svg";
import MenuIcon from "../../../../global/assets/icons/menu.svg";
import { MesssageTo } from "../components/messageTo";
import { MesssageFrom } from "../components/messageFrom";
import { MessageBar } from "../components/messageBar";
import { SafeAreaView } from "react-native-safe-area-context";

const messageToMock: MessageEntity = {
  id: "12312312312",
  userId: '3131312312',
  message: "Olá, como você está?",
  timestamp: "09.11"
};

const messageFromMock: MessageEntity = {
  id: "1312312",
  userId: 'e131231231212',
  message: `Oiee. Estou bem e você? ${"\n"}${"\n"}Gostaria de falar com você sobre o evento que teremos na semana que vem. ${"\n"}${"\n"}Teria disponibilidade para marcarmos uma reunião?`,
  timestamp: "09.11"
};

export function Chat() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Component.Container>
          <Component.Header>
            
            <Component.Title>CHAT</Component.Title>

            <Component.ActionsWrapper>
              <Component.Action>
                <SearchIcon/>
              </Component.Action>

              <Component.Action>
                <MenuIcon/>            
              </Component.Action>
            </Component.ActionsWrapper>
          
          </Component.Header>
          <Component.Body>

        <Component.ChatArea>

          <MesssageTo data={messageToMock}/>
          <MesssageFrom data={messageFromMock}/>
          <MesssageTo data={messageToMock}/>
          <MesssageFrom data={messageFromMock}/>
          <MesssageTo data={messageToMock}/>
          <MesssageFrom data={messageFromMock}/>
          <MesssageTo data={messageToMock}/>

        </Component.ChatArea>
        <Component.MessageBarWrapper>
          <MessageBar/>
        </Component.MessageBarWrapper>
          </Component.Body>
      </Component.Container>
    </SafeAreaView>
  );
}