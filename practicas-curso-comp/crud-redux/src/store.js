import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import productosReducer from './reducers/productosReducers'

const rootReducer = combineReducers ({
    producto: productosReducer,
})

export default function generateStore() {
    const store = createStore (rootReducer, composeWithDevTools (applyMiddleware(thunk) ) )
    return store;
}
