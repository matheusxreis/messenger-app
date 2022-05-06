import React from "react";

import * as Component from "./style"; 

interface ButtonProps {
  text: string
}

export function SecondatyButton({ text }: ButtonProps) {
  return (
    <Component.Container>
      <Component.Text>{text}</Component.Text>
    </Component.Container>
  );
}