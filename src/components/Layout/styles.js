import styled from "styled-components/native";
import Constants from "expo-constants";
import { Platform } from "react-native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding-top: ${(Platform.OS === "android" ? Constants.statusBarHeight : 0) +
  "px"};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.View`
  display: flex;
  justify-content: flex-start;
  flex: 1 1 auto;
`;
