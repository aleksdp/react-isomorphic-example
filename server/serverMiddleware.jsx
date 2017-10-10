import React from 'react'
import {renderToString} from 'react-dom/server'
import {Helmet} from 'react-helmet'
import createHistory from 'history/createMemoryHistory'
import {renderRoutes} from 'react-router-config'
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'
import {plugToRequest} from 'react-cookie'
import {ServerStyleSheet} from 'styled-components'
import {ReduxResolver, Resolver, stringifyQuery, page} from 'react-isomorphic-tools'
import configureStore from './configureStore'
import routes from '../src/routes'
import getConfig from '../config'


const config = getConfig()


const serverMiddleware = async (req, res) => {
    try {
        const location = {
            pathname: req.path,
            search: stringifyQuery(req.query)
        }
        const store = configureStore()
        const history = createHistory({
            initialEntries: [req.url]
        })

        const sheet = new ServerStyleSheet()
        const resolver = new ReduxResolver(routes, store)
        await resolver.resolve(location)

        const unplug = plugToRequest(req, res)

        const html = renderToString(
            sheet.collectStyles(
                <Provider store={store}>
                    <Resolver resolver={resolver} history={history}>
                        <ConnectedRouter history={history}>
                            {renderRoutes(routes)}
                        </ConnectedRouter>
                    </Resolver>
                </Provider>
            ))

        const helmet = Helmet.renderStatic()
        const css = sheet.getStyleTags()
        res.status(200).send(page({
            state: store.getState(),
            helmet,
            html,
            css,
            config,
            resolved: resolver.getResolved()
        }))
        unplug()
    } catch (error) {
        console.log(error)
    }
}

export default serverMiddleware
