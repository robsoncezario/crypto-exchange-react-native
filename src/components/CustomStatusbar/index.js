import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { useTheme } from 'styled-components'

export default function CustomStatusBar() {
  const theme = useTheme()

  const setNavigationBarcolor = () => {
    changeNavigationBarColor(theme.colors.background, theme.statusBar.light)
  }

  useEffect(setNavigationBarcolor, [theme.statusBar])

  return (
    <StatusBar
      backgroundColor={theme.colors.background}
      barStyle={theme.statusBar.content} />
  )
}