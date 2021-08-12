import React from 'react'
import HomeScreen from '../../screens/Home'
import WalletScreen from '../../screens/Wallet'

export default [
{
  key: 'home-screen',
  name: 'Home',
  icon: 'home',
  component: HomeScreen
},

{
  key: 'market-screen',
  name: 'Market',
  icon: 'barschart',
  component: HomeScreen
},

{
  key: 'wallet-screen',
  name: 'Wallet',
  icon: 'wallet',
  component: WalletScreen
}]