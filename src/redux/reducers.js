import { combineReducers } from 'redux'
import navigation from './navigation/navigation.reducer'
import qrCode from './qrCode/qrCode.reducer'

const reducers = combineReducers({
  navigation,
  qrCode
})

export default reducers
