import React from 'react'
import {ImmutableLoadingBar as LoadingBar} from 'react-redux-loading-bar'
import Helmet from 'react-helmet'
import {Link} from 'react-router'

class App extends React.Component {
    render() {
        return (
            <div>
                <LoadingBar style={{
                    backgroundColor: '#f00',
                    top: 0,
                    height: '2px',
                    zIndex: '10000',
                    position: 'fixed',
                    boxShadow: '1px 1px 4px 0px rgba(50, 50, 50, 0.75)'
                }}/>
                <Helmet
                    title='App'

                    link={[
                        {rel: 'icon', type: 'image/png', href: require('../../../assets/favicon.png'), sizes: '150x150'}
                    ]}

                />
                <div>
                    App component
                    <div>
                        <Link to="/test1">to /test1</Link>
                    </div>
                    <div>
                        <Link to="/test2?q=test">to /test2?q=test</Link>
                    </div>
                </div>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}
export default App