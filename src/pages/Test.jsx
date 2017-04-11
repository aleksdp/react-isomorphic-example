import React from "react"
import {Link} from "react-router"
import {preload} from "../../react-isomorphic-tools/src/lib"
import Helmet from "react-helmet"


@preload(({fetchToState})=> {
    return fetchToState("/events", {
        key: "eventsList"
    })
}, {
    alwaysReload: false,
    reloadOnQueryChange: true,
    reloadOnParamsChange: true
})
export default class Test extends React.Component {
    static displayName = "TestPage"

    componentDidMount = () => {
        console.log("mount component")

    }
    componentWillUnmount = () => {

        console.log("unmount component")
    }



    render() {
        return (
            <div>Test component

                <Helmet title="test page"/>

                <div>
                    <Link to="/">to /</Link>
                </div>

                <div>
                    <Link to="/test1">to /test1</Link>
                </div>
                <div>
                    <Link to="/test2">to /test2</Link>
                </div>
            </div>
        )
    }
}