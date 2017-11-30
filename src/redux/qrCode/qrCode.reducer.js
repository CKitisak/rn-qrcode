import {
  SCAN
} from './qrCode.action'

const initialState = {
  currentValue: '',
  historyLogs: []
}

const qrCodeAction = (state = initialState, action) => {
  switch (action.type) {
    case SCAN:
      return {
        ...state,
        currentValue: action.value,
        historyLogs: [...state.historyLogs, action.value]
      }
    default:
      return state
  }
}

export default qrCodeAction
