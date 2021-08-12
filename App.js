import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'
import FontsProvider from './src/styles/fonts'
import theme from './src/styles/theme'
import store from './src/store/index'
import Navigation from './src/routes/index'

export default function App() {
  return (
    <FontsProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </Provider>
    </FontsProvider>
  )
}
