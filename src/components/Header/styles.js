import styled from "styled-components/native";
import Color from "color";

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  top: 0;
  right: 0;
  left: 0;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 26px;
  font-family: ${({ theme }) => theme.text.fontFamily.semiBold};
  line-height: 40px;
  color: ${({ theme }) => theme.text.colors.primary};
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => Color(theme.colors.primary).alpha(0.2)};
  border-radius: 24px;
  height: 32px;
  width: 32px;
`;

export const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;
