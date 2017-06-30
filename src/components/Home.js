import React from 'react'
import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'

// @connect(state=>({
//     animalTypes: state.fetchData
// }))
export default class Home extends React.Component {
    render() {
        console.log('animalTypes.response.response')
        return <div>
            <p>Home</p>
            <ul>
                {/*{this.props.animalTypes.map((item, index)=> <li key={index}>{item.type_name}</li>)}*/}
            </ul>


            <br/>
            <Link to='/'>/</Link>
        </div>
    }
}