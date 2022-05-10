import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";




export const Container = styled.View`
  width: 100%;
  height: 55px;

  padding: 0 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;


  background-color: ${({ theme }) => theme.colors.background};
`;

export const TextField = styled.TextInput.attrs({
  keyboardType: "default",
  multiline: true
})`
  width: 70%;
  height: 50px;

  padding: 8px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.chatArea};

  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Action = styled(RectButton)`
  padding: 8px;
  border-radius: 16px;
  width: auto;
`;