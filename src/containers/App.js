import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import AppNavigator from './AppNavigator'

const App = ({ dispatch, navigation }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: navigation })} />
)

const mapStateToProps = (state) => ({
  navigation: state.navigation
})

App = connect(mapStateToProps)(App)

export default App
