import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import Color from 'color' 

export const Wrapper = styled.TouchableOpacity`
  flex: 1;
`

export const Container = styled(LinearGradient).attrs(({theme}) => ({
  colors: [(Color(theme.colors.primary).lighten(0.1)).toString().trim(), theme.colors.primary]
}))`
  flex: 1;
  height: 200px;
  border-radius: 20px;
  margin-top: 20px;
  padding: 20px;
`

export const Column = styled.View`
  flex-direction: column;
`

export const Balance = styled.Text`
  font-size: 30px;
  font-family: ${({theme}) => theme.text.fontFamily.medium};
  color: white;
`

export const Description = styled.Text`
  font-size: 13px;
  line-height: 17px;
  font-family: ${({theme}) => theme.text.fontFamily.semiBold};
  color: rgba(255, 255, 255, .7);
`

export const BottomRow = styled.View`
  flex-grow: 1;
  flex-direction: row;
  align-items: flex-end;
`

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding-left: 12px;
  padding-right: 12px;
  background-color: rgba(255, 255, 255, .2);
  height: 35px;
  border-radius: 6px;
`

export const ButtonText = styled.Text`
  font-size: 15px;
  font-family: ${({theme}) => theme.text.fontFamily.medium};
  color: white;
`