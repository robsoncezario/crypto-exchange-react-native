import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabBar from '../components/BottomTabBar'
import CurrencyDetails from '../screens/CurrencyDetails'

const { Navigator, Screen } = createStackNavigator()

export default function Navigation() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  if (isLoggedIn) {
    return (
      <NavigationContainer initialRouteName={'Main'}>
        <Navigator screenOptions={{headerShown: false}}>
          <Screen name='Main' component={BottomTabBar} />
          <Screen name='CurrencyDetails' component={CurrencyDetails} />
        </Navigator>
      </NavigationContainer>
    )
  }

  return null
}