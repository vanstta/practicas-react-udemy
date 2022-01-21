
import {
        AGREGAR_PRODUCTO,
        AGREGAR_PRODUCTO_EXITO,
        AGREGAR_PRODUCTO_ERROR,
        COMENZAR_DESCARGA_PRODUCTOS,
        DESCARGA_PRODUCTOS_EXITO,
        DESCARGA_PRODUCTOS_ERROR
    } from '../types'

const initialState = {
    productos: [],
    error: null, 
    loading: false
}

export default function (state=initialState, action) {
    switch(action.type) {
        case AGREGAR_PRODUCTO: 
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
                //por qué acá es state.prod y en descarga es action.payload solo
                //acá necesita una copia de lo que hay + mostrar lo nuevo, en descarga muestra todo lo que hay en la api, no se agrega nada
            }
        //devuelve lo mismo y se puede reutilizar este codigo
        case DESCARGA_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading:false,
                error: true
            }
        case COMENZAR_DESCARGA_PRODUCTOS:
            return {
                ...state,
                loading: action.payload
            }
        case DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            }
        default:
            return state;
    }
}