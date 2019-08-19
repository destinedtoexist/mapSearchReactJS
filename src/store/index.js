import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'

const composeEnhancers = composeWithDevTools({})

let middleWare = applyMiddleware(thunk)
const store = createStore(reducers, composeEnhancers(middleWare));
export default store;