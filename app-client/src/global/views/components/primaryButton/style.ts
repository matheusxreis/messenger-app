import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 100%;
  height: 52px;
  border-radius: 30px;

  background-color: ${({ theme }) => theme.colors.default};
  
  justify-content: center;
  align-items: center;
  margin: 18px 0;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.background};
  font-size: ${RFValue(16)}px;
  text-align: center;
`;