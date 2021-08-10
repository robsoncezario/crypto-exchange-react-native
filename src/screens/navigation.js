import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabBar from '../components/BottomTabBar'

export default function Navigation() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  if(!isLoggedIn) {
    return (
      <NavigationContainer>
        <BottomTabBar />
      </NavigationContainer>
    )
  }

  return null
}