import React from "react";

import * as Component from "./style";

import ImageSource from "../../../../../global/assets/images/welcome.png";
import { PrimaryButton } from "../../../../../global/views/components/primaryButton";
import { SecondatyButton } from "../../../../../global/views/components/secondaryButton";
import { SafeAreaView } from "react-native-safe-area-context";

export function Welcome({navigation}) {
  
  function navigateToLogin() {
    navigation.navigate("Login")
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Component.Container>
      <Component.Image source={ImageSource}/>

      <Component.Message>Connect easily with your family and friends over countries</Component.Message>

      <SecondatyButton text="Terms & Privacy Policy "/>

      <PrimaryButton onPress={navigateToLogin} text="Start Messaging" />
    </Component.Container>
    </SafeAreaView>
  );
}