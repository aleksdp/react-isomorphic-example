import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Application from './Application'

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root')
    )
}


render(Application)

if (module.hot) {
    module.hot.accept('./Application', () => {
        require('./Application')
        render(Application)
    });
}