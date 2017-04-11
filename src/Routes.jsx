import React from "react"
import {Route} from "react-router"

import Test from "./pages/Test"
import Test2 from "./pages/Test2"
import App from "./components/App"


export const routes = (
    <Route path="/" component={App} name="Head">
        {/*<Route path="/test:id" component={Test}/>*/}
        <Route path="/test:id" component={Test2}/>
    </Route>
)
