import React from 'react'
import {Link} from 'react-router'
import {ImmutableLoadingBar as LoadingBar} from 'react-redux-loading-bar'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'

@connect(state=>({
    preload: state.preload
}))
export default class App extends React.Component {
    render() {
        return (
            <div>
                <LoadingBar />

                <Helmet
                    title='App'

                    link={[
                        {rel: 'icon', type: 'image/png', href: require('../../../assets/favicon.png'), sizes: '150x150'}
                    ]}

                />
                {JSON.stringify(this.props.preload)}

                App component
                <div className='test'>test</div>
                <div>
                    <Link to="/test1">to test</Link><br/>
                    <Link to="/test2?q=test">to test</Link><br/>
                    <Link to="/test2">to test</Link><br/>
                </div>

                {this.props.children}

            </div>
        )
    }
}