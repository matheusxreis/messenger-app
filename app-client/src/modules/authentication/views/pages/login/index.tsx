import React, { useState } from "react";
import * as Component from "./style";

import BackIcon from "../../../../../global/assets/icons/back.svg";
import { Keyboard } from "react-native";

import { PrimaryButton } from "../../../../../global/views/components/primaryButton";
import { useAuthRepository } from "../../../infra/repositories/useAuthRepository";
import { socketService } from "../../../../../global/services/socketService";

export function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const socket = socketService().getSocket();
  const repository = useAuthRepository(socket);

  function navigationToWelcome() {
    navigation.pop();
  }

  function login(){
    repository.userAuthenticate(username, email);
  }

  return (
    <Component.Container onPress={Keyboard.dismiss} activeOpacity={1}>
      <Component.Header>
      <Component.BackIconButton onPress={navigationToWelcome}>
      <BackIcon/>
      </Component.BackIconButton>
      <Component.Title>Your Profile</Component.Title>
      </Component.Header>
      <Component.InputContainer>
        <Component.Input placeholder="Username (Required)" onChangeText={setUsername} keyboardType={"email-address"}/>
        <Component.Input placeholder="E-mail (Required)" onChangeText={setEmail}/>
      </Component.InputContainer>
      <PrimaryButton text="Save" onPress={login} />
    </Component.Container>
  );
}