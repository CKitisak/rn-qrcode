import React from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import PushNotification from 'react-native-push-notification'

const HomeScreen = ({ goToScanner, historyLogs }) => {
  const renderLogs = historyLogs.reverse().map((l, i) => (
    <Text key={i}>{l}</Text>
  ))

  PushNotification.localNotification({
    title: "My Notification Title",
    message: "My Notification Message",
  })

  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{ borderWidth: 1, borderColor: '#ccc', paddingVertical: 10, paddingHorizontal: 20 }}
          onPress={goToScanner}>
          <Text>Scan QR Code</Text>
        </TouchableOpacity>

      </View>

      <View style={{ flex: 0.8 }}>
        <ScrollView>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>History Logs</Text>
          {renderLogs}
        </ScrollView>
      </View>
    </View>
  )
}

const mapStateToProps = (state) => ({
  historyLogs: state.qrCode.historyLogs
})

const mapDispatchToProps = (dispatch) => ({
  goToScanner() {
    dispatch(NavigationActions.navigate({ routeName: 'QrScanner' }))
  }
})

HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

export default HomeScreen
