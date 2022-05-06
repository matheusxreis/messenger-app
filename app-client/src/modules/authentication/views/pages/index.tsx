import React from "react";

import * as Component from "./style";

import ImageSource from "../../../../global/assets/images/welcome.png";
import { PrimaryButton } from "../../../../global/views/components/primaryButton";

export function Login() {
  return (
    <Component.Container>
      <Component.Image source={ImageSource}/>
      <Component.Message>Connect easily with your family and friends over countries</Component.Message>
      <PrimaryButton text="Start Messaging"/>
    </Component.Container>
  );
}