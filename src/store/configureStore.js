import {createStore, applyMiddleware, compose} from 'redux'
import Immutable from 'immutable'
import thunkMiddleware from 'redux-thunk'
import {loadingBarMiddleware} from 'react-redux-loading-bar'
import rootReducer from '../reducers/rootReducer'

export default function configureStore() {
    const composeEnhancers = typeof window == 'object' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose


    const store = composeEnhancers(
        applyMiddleware(thunkMiddleware),
        applyMiddleware(
            loadingBarMiddleware({
                promiseTypeSuffixes: ['@@preload/start', '@@preload/finish', '@@preload/error'],
            })
        )
    )(createStore)(rootReducer, Immutable.fromJS(typeof window == 'object' ? window.__data : {}))

    if (module.hot) {
        module.hot.accept('../reducers/rootReducer', () => {
            const nextRootReducer = require('../reducers/rootReducer')
            store.replaceReducer(nextRootReducer)
        });
    }

    return store
}