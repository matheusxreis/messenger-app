import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  padding: 0 16px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(18)}px;
`;

export const BackIconButton = styled(RectButton)`
  padding: 8px;
  border-radius: 16px;
`;

export const InputContainer = styled.View`
  height: auto;
  width: 100%;
  margin: 50% 0 10% 0;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;

  padding: 6px 8px;
  margin: 12px 0;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.input};

`;
