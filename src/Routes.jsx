import React from 'react'
import {Route} from 'react-router'

import App from './components/App'

export const routes = (
    <Route path='/' component={App} name='Head'>
        <Route path='/test:id'
               getComponent={(nextState, cb)=> {
                   import('./pages/Test').then((Test)=> {
                       cb(null, Test.default)
                   })
               }}
        />
    </Route>
)
