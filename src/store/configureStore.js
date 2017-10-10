import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import {loadingBarMiddleware} from 'react-redux-loading-bar'
import {
    PRELOAD_START,
    PRELOAD_SUCCESS,
    PRELOAD_FAIL
} from 'react-isomorphic-tools/dist/redux/constants'
import rootReducer from '../reducers/rootReducer'
import {history} from '../'


export default function configureStore() {
    const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
        compose
    const store = composeEnhancers(
        applyMiddleware(
            thunk,
            routerMiddleware(history),
            loadingBarMiddleware({
                promiseTypeSuffixes: [PRELOAD_START, PRELOAD_SUCCESS, PRELOAD_FAIL]
            })
        ))(createStore)(rootReducer, typeof window === 'object' ? window.__preloadState : {})

    if (module.hot) {
        module.hot.accept('../reducers/rootReducer', () => {
            store.replaceReducer(rootReducer)
        })
    }

    return store
}
