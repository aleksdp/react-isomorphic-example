import App from '../components/App'
import Error from 'react-isomorphic-tools/pages/Error'
import Home from '../views/Home'
import About from '../views/About'
import Test from '../views/Test'
import TestFull from '../views/TestFull'
import * as actions from '../actions'

const routes = [
    {
        component: App,
        routes: [
            {
                path: '/error',
                component: Error,
                exact: false,
                strict: false
            },
            {
                path: '/',
                component: Home,
                routes:[
                    {
                        path: '/',
                        component: About,
                        exact: true
                    },
                    {
                        path: '/test',
                        component: Test,
                        preload: actions.test,
                        preloadOptions:{
                            alwaysReload: true
                        },
                        exact: true
                    },
                    {
                        path: '/test/:id',
                        component: TestFull,
                        preload: actions.testFull,
                        preloadOptions:{
                            alwaysReload: true
                        }
                    }
                ]
            }
        ]
    }
]


export {
    routes
}