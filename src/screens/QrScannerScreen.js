import React from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
import { Text, TouchableOpacity, View } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { scan } from '../redux/qrCode/qrCode.action'

let scanner

const QrScannerScreen = ({ currentValue, historyLogs, goHome, scan }) => (
  <View style={{ flex: 1 }}>
    <View>
      <TouchableOpacity onPress={goHome}>
        <Text>Go Home</Text>
      </TouchableOpacity>
      <Text>{currentValue}</Text>
    </View>
    <QRCodeScanner
      ref={node => scanner = node}
      onRead={e => {
        console.log(e)
        scan(e.data)
      }}
      // topContent={
      //   <Text>Scan your the QR code.</Text>
      // }
      bottomContent={
        <TouchableOpacity onPress={() => scanner.reactivate()}>
          <Text>Scan new one</Text>
        </TouchableOpacity>
      }
    />
  </View>
)

const mapStateToProps = (state) => ({
  currentValue: state.qrCode.currentValue,
  historyLogs: state.qrCode.historyLogs
})

const mapDispatchToProps = (dispatch) => ({
  goHome() {
    dispatch(NavigationActions.navigate({ routeName: 'Home' }))
  },
  scan(value) {
    dispatch(scan(value))
  }
})

QrScannerScreen = connect(mapStateToProps, mapDispatchToProps)(QrScannerScreen)

export default QrScannerScreen
