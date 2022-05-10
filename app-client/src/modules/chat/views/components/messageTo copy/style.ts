import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
  width: 50%;
  padding: 8px;

  border-radius: 8px;
  
  background-color: ${({ theme }) => theme.colors.default};
  `;

export const TextWrapper = styled.View`
  line-height: 24px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.background};
  text-align: left;
`;

export const TimestampWrapper = styled.View`
  line-height: 16px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Timestamp = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.background};
`;

