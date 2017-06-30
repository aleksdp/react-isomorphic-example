// import
// import {Link} from '../../react-isomorphic-tools/src/lib'
// import React from 'react'
import App from '../components/App'
import Home from '../components/Home'
import Navigation from '../pages/Navigation'
import Error from '../../react-isomorphic-tools/src/pages/Error'
// import {renderRoutes} from 'react-router-config'
// import {Link} from 'react-router-dom'
//
// const Root = (props) => {
//
//
//     return <div>
//         <p>root</p>
//         <Link to='/home'>Home</Link>
//         <Link to={{pathname: '/home', query: {q: '1'}}}>Home</Link>
//         <Link to={{pathname: '/home', query: {q: '2'}}}>Home</Link>
//         <Link to={{pathname: '/home', query: {q: '3'}}}>Home</Link>
//         <Link to={{pathname: '/home', query: {q: '4'}}}>Home</Link>
//         <Link to={{pathname: '/home', query: {q: '5'}}}>Home</Link>
//         {renderRoutes(props.route.routes)}
//     </div>
// }


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
                component: Navigation,
                exact: false,
                routes: [
                    {
                        path: '/test:id',
                        component: Home,
                        preload: async({fetchToState})=> {

                            await fetchToState('http://api.zoozz.org/app_dev.php/api/wiki.getTypes', {baseUrl: '', key: 'animalTypes'})
                            await fetchToState('http://api.zoozz.org/app_dev.php/api/wiki.getTypes', {baseUrl: '', key: 'animalTypes'})
                        },
                        strict: false,
                        exact: false,
                        // preloadOptions:{
                        //     alwaysReload: true
                        // }
                    }
                ]
            }
        ]
    }
]

export {
    routes
}