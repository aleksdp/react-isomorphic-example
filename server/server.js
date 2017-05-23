import React from 'react'
import {renderToString} from 'react-dom/server'
import {Helmet} from 'react-helmet'
import {match, RouterContext} from 'react-router'
import {Provider} from 'react-redux'
import {resolve} from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import {plugToRequest} from 'react-cookie'
import page from './page'
import configureStore from './configureStore'
import {routes} from '../src/Routes'
import {loadOnServer} from 'react-isomorphic-tools'
const app = express()
import proxy from 'express-http-proxy'

import {ServerStyleSheet} from 'styled-components'


import config from '../config'

const {origin} = config();

app.use(cookieParser())
app.use('/public', express.static(resolve(__dirname, '../public')))
app.get('/favicon:ext', (req, res)=> {
    res.sendFile(resolve(__dirname, `../assets/favicon${req.params.ext}`))
})
app.use('/uploads', proxy(origin, {
    forwardPath: (req)=> {
        return '/uploads' + require('url').parse(req.url).path
    }
}))

app.use((req, res)=> {
    const store = configureStore()
    match({routes, location: req.url}, (err, redirect, renderProps)=> {
        if (err) {
            res.status(500).send('Internal error :(')
        } else if (redirect) {
            res.redirect(302, redirect.pathname + redirect.search)
        } else if (renderProps) {
            store.dispatch({
                type: 'navigator/SET_USER_AGENT',
                payload: req.get('user-agent')
            })
            const unplug = plugToRequest(req, res)
            loadOnServer({store, renderProps}).then(
                ()=> {
                    const sheet = new ServerStyleSheet()
                    const html = renderToString(
                        sheet.collectStyles(
                            <Provider store={store}>
                                <RouterContext {...renderProps}/>
                            </Provider>
                        )
                    )
                    const helmet = Helmet.renderStatic()
                    const css = sheet.getStyleTags()
                    res.status(200).send(page({store, helmet, css, html}))
                    unplug()
                }
            ).catch((error)=> {
                if (error.code == 303) {
                    res.redirect(error.location)
                }
            })
        } else {
            res.status(404).send('Not found')
        }
    })
})

app.listen(3000, ()=> {
    console.log('Page server is listening on port 3000!')
})