import React from 'react'
import {Link} from 'react-isomorphic-tools'
import {connect} from 'react-redux'

@connect(state=>({
    animalTypes: state.fetchData.animalTypes.response.response
}))
export default class Home extends React.Component {
    render() {
        return <div>
            <p>Home</p>
            <ul>
                {this.props.animalTypes.map((item, index)=> <li key={index}>{item.type_name}</li>)}
            </ul>


            <br/>
            <Link to='/'>/</Link>
        </div>
    }
}