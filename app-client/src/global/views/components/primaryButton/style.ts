import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 52px;
  background-color: ${({ theme }) => theme.colors.default};
  border-radius: 30px;

  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.background};
  font-size: ${RFValue(16)}px;
  text-align: center;
`;