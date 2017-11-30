import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from './reducers'

const configureStore = () => {
  const middlewares = []

  // ____ DO ONLY IN DEV MODE
  if (__DEV__) {
    // ____ LOGGER MIDDLEWARE (should be at last)
    const logger = createLogger({ collapsed: true })
    middlewares.push(logger)
  }

  // ____ CREATE REDUX-STORE
  const store = createStore(reducers, applyMiddleware(...middlewares))

  return store
}

export default configureStore
