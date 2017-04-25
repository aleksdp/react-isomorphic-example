import React from 'react'
import PropTypes from 'prop-types'
import {Router} from 'react-router'
import {routes} from './Routes.jsx'
import {AsyncLoader} from 'react-isomorphic-tools'
import {Provider} from 'react-redux'



export default class Application extends React.Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        store: PropTypes.object.isRequired
    }

    render() {
        const {history, store} = this.props
        return (
            <Provider store={store} key='provider'>
                <Router history={history}
                        render={(props)=><AsyncLoader {...props}/>}>
                    {routes}
                </Router>
            </Provider>
        )
    }
}

