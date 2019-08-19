import { combineReducers } from 'redux'

import auth from './auth'
import polygon from './polygon'
import search from './search'


export default combineReducers({ auth, polygon, search })