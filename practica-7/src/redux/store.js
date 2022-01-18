import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import pokesReducer from './pokesDucks'
import usuarioReducer,{ leerUsuarioActivoAccion} from './ususarioDucks'



const rootReducer = combineReducers({
    pokemones: pokesReducer,
    usuario : usuarioReducer
})

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    leerUsuarioActivoAccion()(store.dispatch)
    return store
}