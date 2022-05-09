import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
  `;

export const Header = styled.View`
  height: 60px;
  width: 100%;
  padding: 0 16px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ChatArea = styled.View`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.chatArea};
`;