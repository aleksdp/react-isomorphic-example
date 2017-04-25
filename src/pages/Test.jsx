import React from 'react'
import {Link} from 'react-router'
import {preload,
    // Check
} from 'react-isomorphic-tools'
import Helmet from 'react-helmet'
import Test2 from './Test2'


// @Check({roles:[
//     'ROLE_ADMIN'
// ]})
@preload(({fetchToState})=> {
    return fetchToState('/events', {
        key: 'eventsList'
    })
}, {
    alwaysReload: false,
    reloadOnQueryChange: true,
    reloadOnParamsChange: true
})
@preload(({fetchToState})=> {


    return fetchToState('/events', {
        key: 'eventsList'
    })
})
export default class Test extends React.Component {
    static displayName = 'TestPage'

    componentDidMount = () => {
        console.log('mount component')

    }
    componentWillUnmount = () => {

        console.log('unmount component')
    }

    render() {
        return (
            <div>Test component

                <Helmet title='test page'/>

                <div>
                    <Link to='/'>to /</Link>
                </div>

                <div>
                    <Link to='/test1'>to /test1</Link>
                </div>
                <div>
                    <Link to='/test2'>to /test2</Link>
                </div>
                <Test2/>
            </div>
        )
    }
}
