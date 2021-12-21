import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Button = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 11px;
  font-family: ${({ theme }) => theme.text.fontFamily.light};
  color: ${({ color }) => color};
  margin-top: 5px;
`;
