import { Platform } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 100%;
  height: 52px;
  border-radius: 30px;

  background-color: ${({ theme }) => theme.colors.background};

  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  text-align: center;
`;