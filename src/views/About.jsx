import React from 'react'
import Readme from '../../README.md'

export default class About extends React.Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: Readme}} className='markdown'/>
        )
    }
}