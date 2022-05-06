import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import * as Component from "./style";

interface ButtonProps extends RectButtonProps {
  text: string;
  onPress: () => void;
}

export function PrimaryButton({text, onPress, ...rest}: ButtonProps) {
  return(
      <Component.Container {...rest} onPress={onPress}>
        <Component.Text>{text}</Component.Text>
      </Component.Container>
  )
}