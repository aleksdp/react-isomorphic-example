import React from 'react'
import {ConnectedRouter} from 'react-router-redux'
import {renderRoutes} from 'react-router-config'
import {Provider} from 'react-redux'
import {Resolver, ReduxResolver} from 'react-isomorphic-tools'
import routes from './routes'


class Application extends React.Component {
    constructor(props) {
        super(props);
        this.resolver = new ReduxResolver(routes, props.store, window.__preloadRoutes)
    }

    render() {
        const {history, store} = this.props
        return (
            <Provider store={store} key='provider'>
                <Resolver resolver={this.resolver} history={history}>
                    <ConnectedRouter history={history}>
                        {renderRoutes(routes)}
                    </ConnectedRouter>
                </Resolver>
            </Provider>
        )
    }
}


export {
    Application as default
}