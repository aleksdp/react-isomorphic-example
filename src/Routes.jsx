import React from 'react'
import {Route} from 'react-router'

import Test from './pages/Test'
import App from './components/App'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <Route path='/test:id' component={Test}>
            </Route>
        </Route>
    </div>
)
