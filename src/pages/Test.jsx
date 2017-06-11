import React from 'react'
import {preload} from 'react-isomorphic-tools'


@preload(({fetchToState})=>fetchToState('/groups/1', {
        key: 'tags'
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