import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/index';
import createLogger from 'redux-logger';

export default function configureStore () {


  const store = createStore(reducers, applyMiddleware(createLogger))

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
