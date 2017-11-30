import React from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
import { Text, TouchableOpacity, View } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { scan } from '../redux/qrCode/qrCode.action'

let scanner

const QrScannerScreen = ({ currentValue, goHome, scan }) => (
  <View style={{ flex: 1 }}>
  <QRCodeScanner
    ref={node => scanner = node}
    onRead={e => {
      scan(e.data)
      // goHome()
    }}
    showMarker={true}
    bottomViewStyle={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}
    topViewStyle={{ maxHeight: 40 }}
    topContent={<Text>Scan your the QR code.</Text>}
    bottomContent={
      <View style={{ flex: 1, padding: 15 }}>
        <Text>Data: {currentValue}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            style={{ backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center', padding: 15 }}
            onPress={() => scanner.reactivate()}>
            <Text>Re-scan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: '#0b0', justifyContent: 'center', alignItems: 'center', padding: 15 }}
            onPress={goHome}>
            <Text>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    }
  />
  </View>
)

const mapStateToProps = (state) => ({
  currentValue: state.qrCode.currentValue
})

const mapDispatchToProps = (dispatch) => ({
  goHome() {
    dispatch(NavigationActions.back())
  },
  scan(value) {
    dispatch(scan(value))
  }
})

QrScannerScreen = connect(mapStateToProps, mapDispatchToProps)(QrScannerScreen)

export default QrScannerScreen
