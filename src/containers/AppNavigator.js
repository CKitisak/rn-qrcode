import React from 'react'
import { StackNavigator } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import QrScannerScreen from '../screens/QrScannerScreen'

const AppNavigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    QrScanner: { screen: QrScannerScreen }
  },
  {
    initialRouteName: 'Home',
    // navigationOptions:
  }
)

export default AppNavigator
