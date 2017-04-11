import React from "react"
import {onEnter, preload, Check} from "../../react-isomorphic-tools/src/lib"

@Check({roles:[
    'ROLE_ADMIN'
]})
@preload(({fetchToState})=> {
    return fetchToState("/events", {
        key: "eventsList"
    })
}, {
    alwaysReload: false,
    reloadOnQueryChange: true,
    reloadOnParamsChange: true
})
export default class Test2 extends React.Component {
    render() {
        console.log('опа дратути')
        return (
            <div>Test2  </div>
        )
    }
}