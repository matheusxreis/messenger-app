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
import { socketService } from './src/global/services/socketService';

export default function App() {


  const { initialize } = socketService()

  const [ fontsLoaded ] = useFonts({
    Mulish_400Regular,
    Mulish_500Medium,
    Mulish_600SemiBold,
    Mulish_700Bold
  });

  useEffect(() => {
    initialize()
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
