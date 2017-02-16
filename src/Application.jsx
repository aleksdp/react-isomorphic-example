import React from 'react'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import configureStore from './store/configureStore'
import {routes} from './Routes.jsx'
import {AsyncLoader, setBaseUrl} from 'react-isomorphic-tools'
import config from '../config'

setBaseUrl(config.baseUrl)

const store = configureStore()

export default ()=>(
    <Provider store={store} key="provider">
        <Router routes={routes} history={syncHistoryWithStore(browserHistory, store, {
            selectLocationState (state) {
                return state.get('routing').toJS()
            }
        })}
                render={(props)=><AsyncLoader {...props}/>}/>
    </Provider>
)
