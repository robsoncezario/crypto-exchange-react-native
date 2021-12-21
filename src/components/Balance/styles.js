import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Color from "color";

const width = Dimensions.get("window").width;
export const Container = styled.View`
  position: relative;
  width: ${width}px;
  height: 200px;
  align-items: flex-start;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  align-self: flex-start;
  overflow: hidden;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.text.fontFamily.medium};
  color: ${({ theme }) => theme.text.colors.secondary};
`;

export const BTCBalance = styled.Text`
  font-size: 35px;
  font-family: ${({ theme }) => theme.text.fontFamily.medium};
  color: ${({ theme }) => theme.text.colors.primary};
`;

export const USDBalance = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.text.fontFamily.medium};
  color: ${({ theme }) => theme.colors.primary};
`;

export const FirstCircle = styled.View`
  position: absolute;
  right: -140px;
  bottom: 0;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${({ theme }) => Color(theme.colors.primary).lighten(0.2)};
`;

export const SecondCircle = styled.View`
  position: absolute;
  right: -60px;
  bottom: -90px;
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background-color: ${({ theme }) => Color(theme.colors.primary).lighten(0.5)};
`;
