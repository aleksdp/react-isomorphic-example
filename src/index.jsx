import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import createHistory from 'history/createBrowserHistory'
import configureStore from './store/configureStore'
import Application from './Application'
import '../assets/style.sass'

const store = configureStore()
const history = createHistory()

const render = Component => {
    ReactDOM.hydrate(
        <AppContainer>
            <Component history={history} store={store}/>
        </AppContainer>,
        document.getElementById('react-root')
    )
}

render(Application)

if (module.hot) module.hot.accept('./Application', () => render(Application))

export {
    history
}

