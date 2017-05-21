import React from 'react'
import ReactDOM from 'react-dom'
import {Router, match} from 'react-router'
import {routes} from './Routes.jsx'
import {AsyncLoader} from 'react-isomorphic-tools'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import {store, history} from './'


const render = () => {
    match({history, routes}, (error, redirectLocation, renderProps) => {
        ReactDOM.render(
            <AppContainer>
                <Provider store={store} key='provider'>
                    <Router history={history} {...renderProps}
                            render={(props)=><AsyncLoader {...props}/>}>
                        {routes}
                    </Router>
                </Provider>
            </AppContainer>,
            document.getElementById('react-root')
        )
    })
}

export {
    render
}