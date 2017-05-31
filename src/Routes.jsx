import React from 'react'
import {Route} from 'react-router'

import App from './components/App'
import Navigation from './pages/Navigation'

export const routes = (
    <Route component={App} name='Head'>
        <Route path='/' component={Navigation}>
            <Route path='/test:id'
                   getComponent={(nextState, cb)=> {
                       import('./pages/Test').then((Test)=> {
                           cb(null, Test.default)
                       })
                   }}
            />
        </Route>
        <Route path='/error' getComponent={(nextState, cb)=> {
            import('../react-isomorphic-tools/src/pages/Error').then((Component)=> {
                cb(null, Component.default)
            })
        }}/>
    </Route>
)
