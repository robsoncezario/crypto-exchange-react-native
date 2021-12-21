import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { BarChart } from "react-native-svg-charts";
import Color from "color";

const width = Dimensions.get("window").width;
export const StyledFlatlist = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
  },
}))`
  flex: 1;
`;

export const ChartContainer = styled.View`
  width: 100%;
  position: relative;
  padding-top: 40px;
`;

export const StyledBarChart = styled(BarChart).attrs(({ theme }) => ({
  svg: {
    fill: Color(theme.colors.primary).alpha(0.7).toString().trim(),
  },
  contentInset: {
    top: 20,
    bottom: 20,
  },
}))`
  width: 250px;
  height: 200px;
  align-self: center;
`;

export const Tooltip = styled.View`
  position: absolute;
  left: ${width / 2 - 17.5}px;
  top: 30px;
  align-items: center;
  justify-content: center;
  padding-left: 6px;
  padding-right: 6px;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 25px;
  width: 70px;
  border-radius: 4px;
`;

export const TooltipAmount = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.text.fontFamily.medium};
  color: white;
`;

export const EarningDescription = styled.Text`
  font-size: 19px;
  font-family: ${({ theme }) => theme.text.fontFamily.regular};
  color: ${({ theme }) => theme.text.colors.primary};
  margin-top: 10px;
`;

export const EarningAmount = styled.Text`
  font-size: 55px;
  font-family: ${({ theme }) => theme.text.fontFamily.semiBold};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 10px;
`;

export const UpdatePayment = styled.Text`
  width: 250px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.text.fontFamily.regular};
  color: ${({ theme }) => theme.text.colors.secondary};
  margin-top: 10px;
  text-align: center;
`;

export const WithdrawButton = styled.TouchableOpacity`
  width: ${width - 40}px;
  height: 50px;
  border-radius: 12px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const WithdrawText = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.text.fontFamily.medium};
  font-size: 18px;
`;
