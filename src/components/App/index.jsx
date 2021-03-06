import React from 'react'
import LoadingBar from 'react-redux-loading-bar'
import {Helmet} from 'react-helmet'
import {renderRoutes} from 'react-router-config'
import config from '../../../config'
import {setBaseUrl} from 'react-isomorphic-tools'

const {APP_API_BASE_URL} = config()
setBaseUrl(APP_API_BASE_URL)

export default class App extends React.Component {
    constructor() {
        super();
        const isDev = process.env.NODE_ENV == 'development'
        this.links = [{
            rel: 'icon',
            type: 'image/png',
            href: require('../../../assets/favicon.png'),
            sizes: '150x150'
        }]
        if (!isDev) {
            this.links.push({
                href: '/public/style.css',
                type: 'text/css',
                rel: 'stylesheet'
            })
        }

    }

    render() {
        return (
            <div>
                <LoadingBar style={{
                    backgroundColor: '#f00',
                    top: 0,
                    height: '1px',
                    zIndex: '10000',
                    position: 'fixed',
                    boxShadow: '1px 1px 4px 0px rgba(50, 50, 50, 0.75)'
                }}
                            updateTime={50} progressIncrease={50}/>
                <Helmet>
                    <title>Example App</title>
                    {this.links.map((item, index)=><link {...item} key={index}/>)}
                </Helmet>
                {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
}