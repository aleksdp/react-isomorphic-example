import React from 'react'
import {connect} from 'react-redux'
import Test from '../components/Test'

@connect(state=>({
    adverts: state.fetchData.adverts.response.response.items
}))
export default class TestView extends React.Component {
    render() {
        return (
            <Test items={this.props.adverts}/>
        )
    }
}