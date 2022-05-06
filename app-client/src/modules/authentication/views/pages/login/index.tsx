import React from "react";

import * as Component from "./style";

import BackIcon from "../../../../../global/assets/icons/back.svg";

export function Login() {
  return (
    <Component.Container>
      <Component.Header>
      <Component.BackIconButton></Component.BackIconButton>
      <BackIcon/>
      <Component.Title>Your Profile</Component.Title>
      </Component.Header>
    </Component.Container>
  );
}