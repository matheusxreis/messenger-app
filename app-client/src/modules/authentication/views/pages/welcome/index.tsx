import React from "react";

import * as Component from "./style";

import ImageSource from "../../../../../global/assets/images/welcome.png";
import { PrimaryButton } from "../../../../../global/views/components/primaryButton";
import { SecondatyButton } from "../../../../../global/views/components/secondaryButton";

export function Welcome({navigation}) {
  
  function navigateToLogin() {
    navigation.navigate("Login")
  }

  return (
    <Component.Container>
      <Component.Image source={ImageSource}/>
      <Component.Message>Connect easily with your family and friends over countries</Component.Message>
      <SecondatyButton text="Terms & Privacy Policy "/>
      <PrimaryButton onPress={navigateToLogin} text="Start Messaging" />
      
    </Component.Container>
  );
}