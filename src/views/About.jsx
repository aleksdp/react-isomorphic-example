import React from 'react'
import Readme from 'react-isomorphic-tools/README.md'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    div{
        width: 90%;
        background: transparent;
    }
`

export default class About extends React.Component {
    render() {
        return (
            <Wrapper>
                <div dangerouslySetInnerHTML={{__html: Readme}} className='github'/>
            </Wrapper>
        )
    }
}