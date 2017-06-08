import {combineReducers} from 'redux-immutable'
import * as reducers from './'
import * as baseReducers from '../../react-isomorphic-tools/src/reducers/immutable'

export default combineReducers(Object.assign(baseReducers, reducers))