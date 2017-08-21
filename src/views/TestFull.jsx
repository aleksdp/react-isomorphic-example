import React from 'react'
import {connect} from 'react-redux'
import TestFull from '../components/TestFull'

@connect(state=>({
    item: state.fetchData.advertsFull.response.response.advert
}))
export default class TestFullView extends React.Component {
    render() {
        return (
            <TestFull item={this.props.item}/>
        )
    }
}