import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { AreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Color from 'color'

export const Row = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width - 40}px;
  height: 80px;
  border-style: solid; 
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.divider};
  padding-left: 5px;
  padding-right: 5px;
  align-items: center;
  flex-direction: row;
`

export const Circle = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({color}) => Color(color).alpha(0.2)};
  align-items: center;
  justify-content: center;
`

export const Symbol = styled.Text`
  font-size: 22px;
  font-family: ${({theme}) => theme.text.fontFamily.medium};
  color: ${({theme}) => theme.text.colors.primary};
`

export const NameColumn = styled.View`
  width: 70px;
  flex-direction: column;
  margin-left: 10px;
`

export const Name = styled.Text`
  font-size: 13px;
  line-height: 15px;
  font-family: ${({theme}) => theme.text.fontFamily.regular};
  color: ${({theme}) => theme.text.colors.secondary};
`

export const StyledChart = styled(AreaChart).attrs(({color}) => ({
  curve: shape.curveNatural,
  svg: {
    strokeWidth: 1,
    stroke: color,
    fill: (Color(color).alpha(0.4)).toString().trim()
  },
  contentInset: {
    top: 5,
    bottom: 5
  }
}))`
  width: 100px;
  height: 60px;
  margin-left: 10px;
`

export const PriceColumn = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: 10px;
`

export const Price = styled.Text`
  font-size: 19px;
  font-family: ${({theme}) => theme.text.fontFamily.medium};
  color: ${({theme}) => theme.text.colors.primary};
`

export const PercentageContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 6px;
  padding-right: 6px;
  background-color: ${({theme, isNegative}) => Color(isNegative ? theme.colors.error : theme.colors.success).alpha(0.1)};
  height: 20px;
  margin-top: 2px;
  border-radius: 4px;
`

export const Percentage = styled.Text`
  font-size: 13px;
  font-family: ${({theme}) => theme.text.fontFamily.semiBold};
  color: ${({theme, isNegative}) => isNegative ? theme.colors.error : theme.colors.success};
`