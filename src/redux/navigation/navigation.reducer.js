import { addNavigationHelpers } from 'react-navigation'
import AppNavigator from '../../containers/AppNavigator'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'))

const navigation = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state)
    return nextState || state
}

export default navigation
