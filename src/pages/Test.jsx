import React from 'react'
import {preload} from '../../react-isomorphic-tools/src/lib'


@preload(({fetchToState})=>fetchToState('/wiki.getTypes1', {
        key: 'wikiTypes'
    })
)
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
            <div>
                Test component

            </div>
        )
    }
}