import {combineReducers} from 'redux'
import * as baseReducers from 'react-isomorphic-tools/dist/redux/reducers'
import * as reducers from './'


export default combineReducers({...baseReducers, ...reducers})