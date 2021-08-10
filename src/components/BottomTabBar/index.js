import React from 'react'
import { useTheme } from 'styled-components'
import {t} from '../../i18n/index'
import { AntDesign } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  Container,
  Button,
  Label 
} from './styles'
import screenList from './screens'

const { Navigator, Screen }= createBottomTabNavigator()

export default function BottomTabBar() {
  const theme = useTheme()

  return (
    <Navigator 
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        return(
          <Container>
            {screenList.map((tab, index) => {
              const isFocused = state.index === index;
              const color = isFocused ? theme.colors.primary : theme.text.colors.primary

              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: tab.name,
                  canPreventDefault: true,
                });
      
                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(tab.name);
                }
              }
      
              const onLongPress = () => {
                navigation.emit({
                  type: 'tabLongPress',
                  target: tab.label,
                })
              }

              return (
                <Button onPress={onPress}
                        onLongPress={onLongPress}>
                  <AntDesign 
                      name={tab.icon} 
                      size={20} 
                      color={color} />
                  <Label color={color}>{t('common.' + tab.name.toLowerCase())}</Label>
                </Button>
              )})
            }
          </Container>
      )}}>
      {screenList.map(s => (
        <Screen 
          key={s.key} 
          name={s.name} 
          component={s.component}
          options={{
            tabBarIcon: ({ size, color }) => {
              return (
                <TouchableOpacity>
                  <AntDesign 
                    name={s.icon} 
                    size={size} 
                    color={color} />
                </TouchableOpacity>
              );
            },
          }} />
      ))}
    </Navigator>
  )
}