import React from 'react'
import styled from 'styled-components'
import {preload, setLocale} from 'react-isomorphic-tools'
import {connect} from 'react-redux'
import {FormattedDate, FormattedMessage} from 'react-intl'


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
@connect(state=>({
    locale: state.getIn(['navigator', 'locale'])
}), {
    setLocale
})
export default class Test extends React.Component {
    static displayName = 'TestPage'

    componentDidMount = () => {
        console.log('mount component')

    }
    componentWillUnmount = () => {

        console.log('unmount component')
    }


    render() {
        return (
            <div>
                <FormattedDate value={new Date()}/>

                <FormattedMessage id='text' values={{var: 'тест'}}/>

                <Button onClick={()=>this.props.setLocale('ru')}>setLocale -> RU</Button>
                <Button onClick={()=>this.props.setLocale('en')}>setLocale -> EN</Button>

                    Current Locale = {this.props.locale}

            </div>
        )
    }
}