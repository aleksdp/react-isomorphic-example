import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {FormattedDate, FormattedMessage} from 'react-intl'
import styled from 'styled-components'
import {setLocale} from '../../react-isomorphic-tools/src/lib'



@connect(state=>({
    locale: state.getIn(['navigator', 'locale'])
}), {
    setLocale
})
export default class Navigation extends React.Component {
    render() {
        return (
            <div>
                <div>
                    App component
                    <div>
                        <Link to='/test1'>to /test1</Link>
                    </div>
                    <div>
                        <Link to='/test2?q=test'>to /test2?q=test</Link>
                    </div>
                </div>

                <FormattedDate value={new Date()} year='numeric' month='long' day='2-digit'/>

                <br/>
                <FormattedDate value={new Date()}/>

                <FormattedMessage id='text' values={{var: 'тест'}}/>

                <Button onClick={()=>this.props.setLocale('ru')}>setLocale -> RU</Button>
                <Button onClick={()=>this.props.setLocale('en')}>setLocale -> EN</Button>

                Current Locale = {this.props.locale}

                <hr/>

                {this.props.children}

            </div>
        )
    }
}


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
