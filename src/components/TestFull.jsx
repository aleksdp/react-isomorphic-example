import React from 'react'

export default class TestFull extends React.Component {
    render() {
        const {advert_name, created_at, description,price} = this.props.item
        return (
            <div>
                <div>Advert name: {advert_name}</div>
                <div>Created at: {created_at}</div>
                <div>Desctiption: {description}</div>
                <div>Price: {price}</div>
            </div>
        )
    }
}