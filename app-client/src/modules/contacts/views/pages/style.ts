import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: 55px;
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

export const ActionsWrapper = styled.View`
  width: 20%;
  height: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Action = styled(RectButton)`
  padding: 8px;
  border-radius: 16px;
`;

export const Body = styled.View`
  flex: 1;
  
  padding: 16px;
`;

export const SearchTextInput = styled.TextInput`
  width: 100%;
  height: 50px;

  padding: 8px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.input};

  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;