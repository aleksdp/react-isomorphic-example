import React from 'react'
import styled from 'styled-components'
import {preload} from 'react-isomorphic-tools'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

@preload(({fetchToState})=>fetchToState('/wiki.getTypes', {
        key: 'wikiTypes'
    })
)
export default class Test extends React.Component {
    static displayName = 'TestPage'

    componentDidMount = () => {
        console.log('mount component')

    }
    componentWillUnmount = () => {

        console.log('unmount component')
    }


    render() {
        const test = 'asd'
        return (
            <div>
                Test
                <Button/>
            </div>
        )
    }
}