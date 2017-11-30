import React from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
import { Text, TouchableOpacity, View } from 'react-native'

const HomeScreen = ({ goToScanner }) => (
  <View>
    <Text>HomeScreen</Text>
    <TouchableOpacity onPress={goToScanner}>
      <Text>Scan QR Code</Text>
    </TouchableOpacity>
  </View>
)

const mapDispatchToProps = (dispatch) => ({
  goToScanner() {
    dispatch(NavigationActions.navigate({ routeName: 'QrScanner' }))
  }
})

HomeScreen = connect(null, mapDispatchToProps)(HomeScreen)

export default HomeScreen
