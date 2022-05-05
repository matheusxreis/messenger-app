import React, { useEffect, useState } from 'react';
import AppLoading from "expo-app-loading";

import { io } from "socket.io-client";

import { ThemeProvider } from 'styled-components';

import { theme } from './src/global/styles/theme';

import {
  useFonts,
  Mulish_400Regular,
  Mulish_500Medium,
  Mulish_600SemiBold,
  Mulish_700Bold
} from "@expo-google-fonts/mulish";

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Mulish_400Regular,
    Mulish_500Medium,
    Mulish_600SemiBold,
    Mulish_700Bold
  });
  
  if(!fontsLoaded){
    return <AppLoading/>
  } 
  // useEffect(() => {
  //   const socket = io("192.168.1.190:3333/");
  //   socket.on("connect", () => {
  //     socket.emit("oi", "olá")
  //   });
  // }, [])
  
  return (
    <ThemeProvider theme={theme}>
   
    </ThemeProvider>
  );
}
