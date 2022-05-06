import React, { useEffect, useRef } from 'react';
import AppLoading from "expo-app-loading";

import { io, Socket } from "socket.io-client";

import { ThemeProvider } from 'styled-components';

import { theme } from './src/global/styles/theme';

import {
  useFonts,
  Mulish_400Regular,
  Mulish_500Medium,
  Mulish_600SemiBold,
  Mulish_700Bold
} from "@expo-google-fonts/mulish";
import { InitialRoutes } from './src/global/routes/initialRoutes';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Mulish_400Regular,
    Mulish_500Medium,
    Mulish_600SemiBold,
    Mulish_700Bold
  });
  const socket = useRef<Socket>();

  useEffect(() => {
    socket.current = io("http://192.168.1.190:3333/chat")  

    socket.current.on("connect", () => {
      socket.current.emit("authenticate", {name: "Joviolai", email: "jovi.oli000dasd4@gmail.com"})
      // socket.current.on("connect_failed", (args) => {
      //   console.log(args)
      // })
      socket.current.on("user_authenticated", (args) => {
        console.log(args)
      })
    })
  }, [])
  
  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return (
    <ThemeProvider theme={theme}>
      <InitialRoutes/>
    </ThemeProvider>
  );
}
