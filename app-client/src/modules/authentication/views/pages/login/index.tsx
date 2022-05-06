import React, { useEffect, useRef, useState } from "react";
import * as Component from "./style";

import BackIcon from "../../../../../global/assets/icons/back.svg";
import { FlatList, View, Text } from "react-native";
import { useAuthRepository } from "../../../infra/repositories/useAuthRepository";
import { socketService } from "../../../../../global/services/socketService";

export function Login() {
  const [users, setUsers] = useState([]);
  const { getSocket } = socketService()
  const socket = getSocket();
  const repository = useAuthRepository(socket);
  
  async function getData() {
    
    const data = await repository.listAllUsers();
    setUsers(data);

    console.log("DATA DO LOGIN",data);
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <Component.Container>
      <Component.Header>
      <Component.BackIconButton></Component.BackIconButton>
      <BackIcon/>
      <Component.Title>Your Profile</Component.Title>
      </Component.Header>
      <FlatList
        data={users}
        renderItem={(item) => {
          return (
            <View>
              <Text>{item.item.name}</Text>
            </View>
          )
        }}

      />
    </Component.Container>
  );
}