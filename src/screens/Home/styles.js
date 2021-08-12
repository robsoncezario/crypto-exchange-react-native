import styled from 'styled-components/native'

export const StyledFlatlist = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
		paddingLeft: 20,
		paddingRight: 20
	}
}))`
	flex: 1;
`

export const Heading = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 30px;
  padding-bottom: 10px;
`

export const HeadingDescription = styled.Text`
  font-size: 17px;
  font-family: ${({theme}) => theme.text.fontFamily.medium};
  color: ${({theme}) => theme.text.colors.secondary};
`

export const MoreButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`

export const More = styled.Text`
  font-size: 17px;
  font-family: ${({theme}) => theme.text.fontFamily.semiBold};
  color: ${({theme}) => theme.colors.primary};
`