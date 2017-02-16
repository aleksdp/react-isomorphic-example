import React from 'react'
import {Link} from 'react-router'
import {preload} from 'react-isomorphic-tools'
import Helmet from 'react-helmet'


@preload(({fetchToState})=>{
    return fetchToState('/events', {
        key: 'eventsList'
    })
})
export default class Test extends React.Component {
    static displayName = 'TestPage'
    render() {
        return (
            <div>Test component

                <Helmet title='test page'/>
                <div className='test'>test</div>

                <div>
                    <Link to="/">to index</Link>
                </div>

                <div>
                    <Link to="/test1">test1</Link>
                </div>
                <div>
                    <Link to="/test2">test2</Link>
                </div>
            </div>
        )
    }
}