import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './redux'
import App from './containers/App'

const store = configureStore()

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root
